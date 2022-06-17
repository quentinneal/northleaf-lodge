import './heroImage.scss';

import Banner from '../banner/banner'

import ButtonDark from '../buttonDark/buttonDark';

const HeroImage = () => {

    return (
        <div className="heroImage">
            <Banner title='NorthLeaf Lodge' description='A hotel booking website demo project.' image='/' button={<ButtonDark link='/search'>Book Now</ButtonDark>}/>
        </div>
    );
}

export default HeroImage;