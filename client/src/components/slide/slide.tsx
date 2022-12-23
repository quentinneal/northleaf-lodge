import './slide.scss';

import { ReactComponent as LeftIcon } from '../../assets/icons/chevron-left-solid.svg';
import { ReactComponent as RightIcon } from '../../assets/icons/chevron-right-solid.svg';
import Banner from '../banner/banner'
import ButtonBanner from '../buttonBanner/buttonBanner';

type SlideProps = {
    slide: {
        id: string,
        image: {
            image320: string,
            image640: string,
            image960: string,
            image1280: string,
            image1600: string,
            image1920: string,
            image2240: string,
            image2560: string,
            image2880: string,
            image3200: string,
            image3520: string,
            image3840: string,
        },
        title: string,
        description: string,
        buttonLink: string,
        buttonText: string,
    }
    sliderPosition: number,
    sliderNumber: number,
    sliderDecrement: () => void,
    sliderIncrement:  () => void,

}

const Slide = ({slide, sliderPosition, sliderNumber, sliderDecrement, sliderIncrement}: SlideProps) => {

    return (
        <div className={`slide ${sliderPosition === sliderNumber ? 'activeSlider' : 'inactiveSlider'} `}>
        <Banner 
            title={slide.title}
            description={slide.description}
            image={slide.image} 
            button={<ButtonBanner link={slide.buttonLink}>{slide.buttonText}</ButtonBanner>}
            arrows={<div className="banner-arrows">
                    <button 
                        className='banner-left-arrow'
                        onClick={sliderDecrement}>
                            <LeftIcon className="banner-left-icon"/>
                    </button>
                    <button 
                        className='banner-right-arrow' 
                        onClick={sliderIncrement}>
                            <RightIcon className="banner-right-icon"/>
                    </button>
                </div>}
        />
        </div>
    );
}

export default Slide;