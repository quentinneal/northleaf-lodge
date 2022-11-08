import './heroImage.scss';

import ButtonBanner from '../buttonBanner/buttonBanner';

const HeroImage = () => {

    return (
        <div className="heroImage">
            <div className="banner-container">
                <div className="banner-content">
                    <div className="banner-heading">
                        <div className="banner-title"><span className="banner-title-text">NorthLeaf Lodge</span></div>
                        <div className="banner-description"><span className="banner-description-text">A hotel booking website demo project.</span></div>
                    </div>
                    <ButtonBanner link='/search'>Book Now</ButtonBanner>
                </div>
            </div>
        </div>
    );
}

export default HeroImage;