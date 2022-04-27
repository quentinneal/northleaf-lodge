import React from 'react';

import './slide.scss';

import { Link } from 'react-router-dom';

const Slide = ({slide, sliderPosition, sliderNumber}) => {

    return (
        <div className={`${slide.image} slider-image ${sliderPosition === sliderNumber ? 'activeSlider' : 'inactiveSlider'} `} alt="Mt Si Summit">
            <div className="slider-content">
                <div className="slider-heading">
                    <div className="slider-title">{slide.title}</div>
                    <div className="slider-description">{slide.description}</div>
                </div>
                <Link className="slider-button" to={slide.buttonLink}><span className="slider-button-text">{slide.buttonText}</span></Link>
            </div>
        </div>
    );
}

export default Slide;