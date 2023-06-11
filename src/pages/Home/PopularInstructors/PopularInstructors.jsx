import React from 'react';
import { Link } from 'react-router-dom';
import Slider from './Slider/Slider';

const PopularInstructors = () => {
    return (
        <div className='mt-6 md:mt-12 mb-6'>
            <h2 className='text-center text-3xl md:text-5xl font-bold uppercase'>Our Popular Instructors</h2>
            <div className='px-4 md:px-72 mt-2 md:mt-3 md:text-lg text-slate-500'>
                <p className='text-center'>Challenge your strength. Stretch your body. Breathe easy. Our team of world-class instructors will empower you to grow and achieve all of your fitness and wellness goals.</p>
            </div>
            <div className='flex justify-center mt-3'>
                <Link to="/instructors">
                    <button className='btn btn-primary btn-outline'>View Instructors</button>
                </Link>
            </div>
            <Slider></Slider>

        </div>
    );
};

export default PopularInstructors;