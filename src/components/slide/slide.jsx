import './slide.scss';

import { Link } from 'react-router-dom';

import ButtonDark from '../buttonDark/buttonDark';

const Slide = ({slide, sliderPosition, sliderNumber, setArrowDisable}) => {

    const enableArrows = () => {
        setArrowDisable(false);
    }

    return (
        <div className={`slide-container ${sliderPosition === sliderNumber ? 'activeSlider' : 'inactiveSlider'} `} alt="Mt Si Summit" onTransitionEnd={enableArrows}>
        <img className={`slide-image`} src={slide.image} alt='placeholder text' loading='eager' />
            <div className="slide-content">
                <div className="slide-heading">
                    <div className="slide-title">{slide.title}</div>
                    <div className="slide-description">{slide.description}</div>
                </div>
                <Link className="slide-link" to={slide.buttonLink}>
                    <ButtonDark>{slide.buttonText}</ButtonDark>
                </Link>
            </div>
        </div>
    );
}

export default Slide;