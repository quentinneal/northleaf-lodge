import { useState } from "react";

import './slider.scss';

import { sliderData } from './sliderData';

import Slide from '../slide/slide';

import Div100vh from 'react-div-100vh';

import { ReactComponent as LeftIcon } from '../../assets/chevron-left-solid.svg';
import { ReactComponent as RightIcon } from '../../assets/chevron-right-solid.svg';


const Slider = () => {

    const [sliderList, setSliderData] = useState(sliderData); // List of slider images and data
    const [sliderNumber, setSliderNumber] = useState(0); // Number used to trigger which slide I want to show
    const [arrowDisable, setArrowDisable] = useState(false); // Disables arrow buttons only during slide transitions

    const lastSliderNumber = sliderList.length - 1;

    const sliderDecrement = () => {
        setArrowDisable(true);
        setSliderNumber(prevSliderNumber => prevSliderNumber === 0 ? lastSliderNumber : prevSliderNumber - 1);
    }

    const sliderIncrement = () => {
        setArrowDisable(true);
        setSliderNumber(prevSliderNumber => prevSliderNumber === lastSliderNumber ? 0 : prevSliderNumber + 1)
    }

    return (
        <Div100vh className="slider">
            {sliderList.map((slide, sliderPosition) => (
                <Slide key={slide.id} slide={slide} sliderPosition={sliderPosition} sliderNumber={sliderNumber} setArrowDisable={setArrowDisable}/>
            ))}
            <div className="slider-arrows">
                <button 
                    className='slider-left-arrow'
                    disabled={arrowDisable}
                    onClick={sliderDecrement}>
                        <LeftIcon className="slider-left-icon"/>
                </button>
                <button 
                    className='slider-right-arrow' 
                    disabled={arrowDisable}
                    onClick={sliderIncrement}>
                        <RightIcon className="slider-right-icon"/>
                </button>
            </div>
        </Div100vh>
    );
}

export default Slider;