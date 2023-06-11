import React from 'react';
import CountUp from 'react-countup';
import img1 from '../../../assets/MidBanner/teacher.png'
import img2 from '../../../assets/MidBanner/study.png'
import img3 from '../../../assets/MidBanner/yoga.png'

const MidBanner = () => {
    return (
        <div className='my-4' style={{ backgroundColor: "#038c73", color: "white" }}>
            <div className='flex flex-wrap justify-evenly md:justify-center md:gap-64 pt-3 pb-2 md:py-4'>
                <div className='flex items-center'>
                    <img src={img1} style={{ width: "4rem", height: '4rem', color: "white" }} className='mr-3' alt="" />
                    <div>
                        <h1 className='mb-0 text-lg md:text-3xl font-semibold'><CountUp start={0} end={25} duration={5} separator="," />+</h1>
                        <p className='mb-0'>Teachers</p>
                    </div>
                </div>
                <div className='flex items-center'>
                    <img src={img2} style={{ width: "4rem", height: '4rem', color: "white" }} className='mr-3' alt="" />
                    <div>
                        <h1 className='mb-0 text-lg md:text-3xl font-semibold'><CountUp start={0} end={300} duration={5} separator="," />+</h1>
                        <p className='mb-0'>Students</p>
                    </div>
                </div>
                <div className='flex items-center'>
                    <img src={img3} style={{ width: "4rem", height: '4rem', color: "white" }} className='mr-3' alt="" />
                    <div>
                        <h1 className='mb-0 text-lg md:text-3xl font-semibold'><CountUp start={0} end={20} duration={5} separator="," />+</h1>
                        <p className='mb-0'>Styles</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MidBanner;