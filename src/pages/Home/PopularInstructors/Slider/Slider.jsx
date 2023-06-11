import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper';

import 'swiper/css';
import 'swiper/css/pagination';
import './Slider.css'

import slide_image_1 from '../../../../assets/Slider/slider1.jpg'
import slide_image_2 from '../../../../assets/Slider/slider2.jpg'
import slide_image_3 from '../../../../assets/Slider/slider3.jpg'
import slide_image_4 from '../../../../assets/Slider/slider4.jpg'
import slide_image_5 from '../../../../assets/Slider/slider5.jpg'
import slide_image_6 from '../../../../assets/Slider/slider6.jpg'


const Slider = () => {
    return (
        <div className='md:px-36'>
            <Swiper
                loop={true}
                slidesPerView={3}
                pagination={{ clickable: true }}
                modules={[Pagination]}
                spaceBetween={25}
                className="swiper_container"
            >
                <SwiperSlide>
                    <div className='relative'>
                        <img src={slide_image_1} alt="slide_image" />
                        <div className='absolute bottom-3 left-3'>
                            <div className='bg-black bg-opacity-50 px-2 rounded'>
                                <h2 className='font-semibold text-lg mt-2 text-white'>Miss Ganguly</h2>
                            </div>
                        </div>
                        <div className='absolute bottom-3 right-3'>
                            <div className='bg-black bg-opacity-50 px-2 rounded'>
                                <h2 className=' text-lg mt-2 text-white'>400 Classes</h2>
                            </div>
                        </div>


                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={slide_image_2} alt="slide_image" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={slide_image_3} alt="slide_image" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={slide_image_4} alt="slide_image" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={slide_image_5} alt="slide_image" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={slide_image_6} alt="slide_image" />
                </SwiperSlide>
                <div className="slider-controller">
                    <div className="swiper-pagination"></div>
                </div>
            </Swiper>
        </div>
    );
};

export default Slider;