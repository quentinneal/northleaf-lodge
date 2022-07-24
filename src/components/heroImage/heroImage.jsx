import './heroImage.scss';

import Banner from '../banner/banner'
import ButtonBanner from '../buttonBanner/buttonBanner';

const HeroImage = () => {

    return (
        <div className="heroImage">
            <Banner title='NorthLeaf Lodge' 
            description='A hotel booking website demo project.' 
            image='/'
            button={<ButtonBanner link='/search'>Book Now</ButtonBanner>}/>
        </div>
    );
}

export default HeroImage;