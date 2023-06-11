import React from 'react';
import { Helmet } from 'react-helmet-async';
import SliderSection from '../SliderSection/SliderSection';

const Home = () => {
    return (
        <div>
            <Helmet>
                <title>Home | Yoga Journey</title>
            </Helmet>
            <SliderSection></SliderSection>

        </div>
    );
};

export default Home;