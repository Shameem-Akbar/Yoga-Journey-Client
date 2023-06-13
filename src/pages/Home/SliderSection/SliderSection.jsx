import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import image1 from "../../../assets/Slider/image1.jpg"
import image2 from "../../../assets/Slider/image2.jpg"
import image3 from "../../../assets/Slider/image3.jpg"
import image4 from "../../../assets/Slider/image4.jpg"
import image5 from "../../../assets/Slider/image5.jpg"
import './SliderSection.css'

const SliderSection = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,

        autoplaySpeed: 3000
    };

    return (
        <Slider {...settings}>
            <div>
                <div className="slide-container">
                    <img src={image1} alt="Slide 1" />
                    <div className="slide-content md:p-3">
                        <h2 className='font-semibold text-4xl md:text-5xl'>Embrace the Radiance of Summer with Yoga Journey</h2>
                        <p className='text-slate-400 hidden md:block'>Elevate your summer experience with our enchanting Yoga Camp at Yoga Journey. Embrace the joy of shared laughter, and nurture your body and mind with the transformative power of yoga. </p>
                        <div className='flex justify-center gap-4 mt-3'>
                            <button className='btn btn-primary px-6'>Join Us</button>
                            <button className='btn btn-outline btn-success'>Explore Now</button>
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <div className="slide-container">
                    <img src={image2} alt="Slide 2" />
                    <div className="slide-content">
                        <h2 className='font-semibold text-4xl md:text-5xl'>Discover Harmony and Bliss at our Summer Yoga Camp</h2>
                        <p className='text-slate-400 hidden md:block'>Unveil the harmony and bliss of summer at our captivating Yoga Camp at Yoga Journey. Immerse yourself in a transformative journey where nature and yoga converge to create a sanctuary of serenity.</p>
                        <div className='flex justify-center gap-4 mt-3'>
                            <button className='btn btn-primary px-6'>Join Us </button>
                            <button className='btn btn-outline btn-success'>Explore Now</button>
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <div className="slide-container">
                    <img src={image3} alt="Slide 3" />
                    <div className="slide-content">
                        <h2 className='font-semibold text-4xl md:text-5xl'>Revitalize Your Summer at the Yoga Wellness Retreat</h2>
                        <p className='text-slate-400 hidden md:block'>Indulge in a transformative summer experience at our Yoga Wellness Retreat, where relaxation and rejuvenation await. Escape the hustle and bustle of daily life and immerse yourself in a sanctuary of tranquility at Yoga Journey.</p>
                        <div className='flex justify-center gap-4 mt-3'>
                            <button className='btn btn-primary px-6'>Join Us</button>
                            <button className='btn btn-outline btn-success'>Explore Now</button>
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <div className="slide-container">
                    <img src={image4} alt="Slide 4" />
                    <div className="slide-content">
                        <h2 className='font-semibold text-4xl md:text-5xl'>Elevate Your Summer with Yoga: Join Our Blissful Camp!</h2>
                        <p className='text-slate-400 hidden md:block'>Elevate your summer experience with our enchanting Yoga Camp at Yoga Journey. Step into a world of bliss, where the gentle breeze and warm sunrays embrace your journey towards inner peace and well-being.</p>
                        <div className='flex justify-center gap-4 mt-3'>
                            <button className='btn btn-primary px-6'>Join Us</button>
                            <button className='btn btn-outline btn-success'>Explore Now</button>
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <div className="slide-container">
                    <img src={image5} alt="Slide 5" />
                    <div className="slide-content">
                        <h2 className='font-semibold text-4xl md:text-5xl'>Experience the Serenity of Summer Yoga Camp</h2>
                        <p className='text-slate-400 hidden md:block'>Immerse yourself in the tranquility of our Summer Yoga Camp at Yoga JOurney. Discover a harmonious blend of relaxation, nature, and self-discovery as you embark on a journey of wellness and rejuvenation.</p>
                        <div className='flex justify-center gap-4 mt-3'>
                            <button className='btn btn-primary px-6'>Join Us</button>
                            <button className='btn btn-outline btn-success'>Explore Now</button>
                        </div>
                    </div>
                </div>
            </div>
        </Slider>
    );
};

export default SliderSection;