import './banner.scss';

const Banner = ({ title, description, image, button, arrows }) => {

    return (
        <div className="banner-container">
            <img className={`banner-image`} src={image} alt='placeholder text' loading='eager' />
            <div className="banner-content">
                <div className="banner-heading">
                    <div className="banner-title"><span className="banner-title-text">{title}</span></div>
                    <div className="banner-description"><span className="banner-description-text">{description}</span></div>
                </div>
                {button}
                {arrows}
            </div>
        </div>
    );
}

export default Banner;