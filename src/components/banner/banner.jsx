import Div100vh from 'react-div-100vh';

import './banner.scss';

const Banner = ({ title, description, image, button }) => {

    return (
        <Div100vh className="banner-container">
            <img className={`banner-image`} src={image} alt='placeholder text' loading='eager' />
            <div className="banner-content">
                <div className="banner-heading">
                    <div className="banner-title"><span className="banner-title-text">{title}</span></div>
                    <div className="banner-description"><span className="banner-description-text">{description}</span></div>
                </div>
                {button}
            </div>
        </Div100vh>
    );
}

export default Banner;