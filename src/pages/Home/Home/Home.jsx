import React from 'react';
import { Helmet } from 'react-helmet-async';
import SliderSection from '../SliderSection/SliderSection';
import PopularClasses from '../PopularClasses/PopularClasses';
import PopularInstructors from '../PopularInstructors/PopularInstructors';
import MidBanner from '../MidBanner/MidBanner';

const Home = () => {
    return (
        <div>
            <Helmet>
                <title>Home | Yoga Journey</title>
            </Helmet>
            <SliderSection></SliderSection>
            <PopularClasses></PopularClasses>
            <MidBanner></MidBanner>
            <PopularInstructors></PopularInstructors>
        </div>
    );
};

export default Home;