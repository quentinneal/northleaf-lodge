import './slide.scss';

import { Link } from 'react-router-dom';

import Div100vh from 'react-div-100vh';

import Banner from '../banner/banner'

import ButtonDark from '../buttonDark/buttonDark';

const Slide = ({slide, sliderPosition, sliderNumber, setArrowDisable}) => {

    const enableArrows = () => {
        setArrowDisable(false);
    }

    return (
        <div className={`slide ${sliderPosition === sliderNumber ? 'activeSlider' : 'inactiveSlider'} `} onTransitionEnd={enableArrows}>
        <Banner 
            title={slide.title}
            description={slide.description}
            image={slide.image} 
            button={<ButtonDark link={slide.buttonLink}>{slide.buttonText}</ButtonDark>}
        />
        </div>
    );
}

export default Slide;