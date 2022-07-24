import './slide.scss';

import { ReactComponent as LeftIcon } from '../../assets/icons/chevron-left-solid.svg';
import { ReactComponent as RightIcon } from '../../assets/icons/chevron-right-solid.svg';
import Banner from '../banner/banner'
import ButtonBanner from '../buttonBanner/buttonBanner';

const Slide = ({slide, sliderPosition, sliderNumber, setArrowDisable, arrowDisable, sliderDecrement, sliderIncrement}) => {

    const enableArrows = () => {
        setArrowDisable(false);
    }

    return (
        <div className={`slide ${sliderPosition === sliderNumber ? 'activeSlider' : 'inactiveSlider'} `} onTransitionEnd={enableArrows}>
        <Banner 
            title={slide.title}
            description={slide.description}
            image={slide.image} 
            button={<ButtonBanner link={slide.buttonLink}>{slide.buttonText}</ButtonBanner>}
            arrows={<div className="banner-arrows">
                    <button 
                        className='banner-left-arrow'
                        //disabled={arrowDisable}
                        onClick={sliderDecrement}>
                            <LeftIcon className="banner-left-icon"/>
                    </button>
                    <button 
                        className='banner-right-arrow' 
                        //disabled={arrowDisable}
                        onClick={sliderIncrement}>
                            <RightIcon className="banner-right-icon"/>
                    </button>
                </div>}
        />
        </div>
    );
}

export default Slide;