import React from 'react';

import './slide.scss';

import { Link } from 'react-router-dom';

const Slide = ({slide, sliderPosition, sliderNumber}) => {

    return (
        <div className={`slide-container ${sliderPosition === sliderNumber ? 'activeSlider' : 'inactiveSlider'} `} alt="Mt Si Summit">
        <img className={`slide-image`} src={slide.image} alt='placeholder text' loading='eager' />
            <div className="slide-content">
                <div className="slide-heading">
                    <div className="slide-title">{slide.title}</div>
                    <div className="slide-description">{slide.description}</div>
                </div>
                <Link className="slide-button" to={slide.buttonLink}><span className="slide-button-text">{slide.buttonText}</span></Link>
            </div>
        </div>
    );
}

export default Slide;