import React from 'react';
import { Slide } from "react-awesome-reveal";
import image1 from '../../../assets/Pictures/image1.jpg'

const TopSection = () => {
    return (
        <div className='md:py-12 md:px-12 md:mt-8'>
            <div className="hero min-h-fit">
                <div className="hero-content p-2 md:gap-20 md:px-24 flex-col-reverse lg:flex-row">

                    <Slide duration={2000} direction='left'>
                        <img src={image1} className="md:max-w-xl rounded-lg" />
                    </Slide>
                    <Slide duration={2000} direction='right'>
                        <div>
                            <h1 className="text-3xl text-center md:text-left md:text-5xl font-bold uppercase mt-4 md:mt-0">Fit Your Body & Mind in this summer camp</h1>
                            <p className="pt-3 md:pt-6"> Fit your body and mind in this immersive yoga camp and embrace the harmony of summer, nature, and personal growth. Register today and embark on a journey towards holistic well-being.</p>
                            <button className="btn btn-primary btn-outline text-white mt-2 md:mt-5">Book Class Today</button>
                        </div>
                    </Slide>
                </div>
            </div>
        </div>
    );
};

export default TopSection;