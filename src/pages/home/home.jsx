import React from 'react';

import HeroImage from '../../components/heroImage/heroImage';
import About from '../../components/about/about';
import Slider from '../../components/slider/slider';

function Home() {
    return (
        <main className="home">
            <HeroImage></HeroImage>
            <About></About>
            <Slider></Slider>
        </main>
    );
}

export default Home;