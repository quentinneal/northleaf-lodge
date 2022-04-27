import './banner.scss';

import Div100vh from 'react-div-100vh';

import { ReactComponent as LeafIcon } from '../../assets/leaf-solid.svg';

import { Link } from 'react-router-dom';

const Banner = () => {

    return (
        <Div100vh className="banner">
            {/*<img className="banner-background-image" src={bannerImage} alt="Mt Si Summit" />*/}
            <div className="banner-background-image" alt="Mt Si Summit">
                <div className="banner-content">
                    <div className="banner-heading">
                        <div className="banner-title"><span className="banner-title-text">North<span className="banner-title-text-green">Leaf</span> Lodge<LeafIcon className="banner-title-text-leaf" /></span></div>
                        <div className="banner-description"><span className="banner-description-text">A hotel booking website demo project.</span></div>
                    </div>
                    <Link className="banner-button" to="/search">
                        <span className="banner-button-text">Book Now</span>
                    </Link>
                </div>
            </div>
        </Div100vh>

    );
}

export default Banner;