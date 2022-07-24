import { useState, useEffect } from "react";

import './slider.scss';

import { sliderData } from '../../data/sliderData';
import Slide from '../slide/slide';

const Slider = () => {

    const [sliderList, setSliderData] = useState(sliderData); // List of slider images and data
    const [sliderNumber, setSliderNumber] = useState(0); // Number used to trigger which slide I want to show
    const [arrowDisable, setArrowDisable] = useState(false); // Disables arrow buttons only during slide transitions
    const [autoplay, setAutoplay] = useState(true); // Used to control if automatic slider is incremented every 3 seconds

    const lastSliderNumber = sliderList.length - 1;

    const sliderDecrement = () => {
        setArrowDisable(true);
        setAutoplay(false);
        setSliderNumber(prevSliderNumber => prevSliderNumber === 0 ? lastSliderNumber : prevSliderNumber - 1);
    }

    const sliderIncrement = () => {
        setArrowDisable(true);
        setAutoplay(false);
        setSliderNumber(prevSliderNumber => prevSliderNumber === lastSliderNumber ? 0 : prevSliderNumber + 1)
    }

    useEffect(() => {
        const timeout = setTimeout(() => {
            if(autoplay) {
                setSliderNumber(prevSliderNumber => prevSliderNumber === lastSliderNumber ? 0 : prevSliderNumber + 1)
            }
        }, 3000);
        return () => clearTimeout(timeout);
      }, [lastSliderNumber, sliderNumber, autoplay]);

    return (
        <section className="slider">
                {sliderList.map((slide, sliderPosition) => (
                    <Slide key={slide.id} 
                    slide={slide} 
                    sliderPosition={sliderPosition} 
                    sliderNumber={sliderNumber} 
                    setArrowDisable={setArrowDisable}
                    arrowDisable={arrowDisable}
                    sliderDecrement={sliderDecrement}
                    sliderIncrement={sliderIncrement}

                    />
                ))}
        </section>
    );
}

export default Slider;