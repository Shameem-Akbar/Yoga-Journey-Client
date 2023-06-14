import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper';

import 'swiper/css';
import 'swiper/css/pagination';
import './Slider.css'

import useAxiosSecure from '../../../../hooks/useAxiosSecure';
import { useQuery } from '@tanstack/react-query';



const Slider = () => {

    const [axiosSecure] = useAxiosSecure();
    const { data: Instructors = [], refetch } = useQuery(['classes'], async () => {
        const res = await axiosSecure.get('/popular-instructors')
        return res.data;
    })

    return (
        <div className='md:px-36'>
            <Swiper
                slidesPerView={3}
                pagination={{ clickable: true }}
                modules={[Pagination]}
                spaceBetween={25}
                className="swiper_container"
            >
                {
                    Instructors.map(instructor =>
                        <SwiperSlide>
                            <div className='relative'>
                                <img src={instructor.instructorImage} alt="slide_image" />
                                <div className='absolute bottom-3 left-3'>
                                    <div className='bg-black bg-opacity-50 px-2 rounded'>
                                        <h2 className='font-semibold text-lg mt-2 text-white'>{instructor.instructorName}</h2>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>)
                }

                <div className="slider-controller">
                    <div className="swiper-pagination"></div>
                </div>
            </Swiper>
        </div>
    );
};

export default Slider;