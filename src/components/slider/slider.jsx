import { useState } from "react";

import './slider.scss';

import { sliderData } from './sliderData';

import Slide from '../slide/slide';

import Div100vh from 'react-div-100vh';

import { ReactComponent as LeftIcon } from '../../assets/chevron-left-solid.svg';
import { ReactComponent as RightIcon } from '../../assets/chevron-right-solid.svg';


const Slider = () => {

    const [sliderNumber, setSliderNumber] = useState(0);
    const [sliderList, setSliderData] = useState(sliderData);

    const lastSliderNumber = sliderList.length - 1;

    return (
        <Div100vh className="slider">
            {sliderList.map((slide, sliderPosition) => (
                <Slide key={slide.id} slide={slide} sliderPosition={sliderPosition} sliderNumber={sliderNumber}/>
            ))}
            <div className="slider-arrows">
                <button 
                    className='slider-left-arrow' 
                    onClick={() => setSliderNumber(prevSliderNumber => prevSliderNumber === 0 ? lastSliderNumber : prevSliderNumber - 1)}>
                        <LeftIcon className="slider-left-icon"/>
                </button>
                <button 
                    className='slider-right-arrow' 
                    onClick={() => setSliderNumber(prevSliderNumber => prevSliderNumber === lastSliderNumber ? 0 : prevSliderNumber + 1)}>
                        <RightIcon className="slider-right-icon"/>
                </button>
            </div>
        </Div100vh>
    );
}

export default Slider;