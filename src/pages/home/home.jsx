import React from 'react';

import Banner from '../../components/banner/banner';
import About from '../../components/about/about';
import Slider from '../../components/slider/slider';

function Home() {
    return (
        <div className="home">
            <Banner></Banner>
            <About></About>
            <Slider></Slider>
        </div>
    );
}

export default Home;