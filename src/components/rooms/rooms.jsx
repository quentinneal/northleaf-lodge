import './rooms.scss';

import { ReactComponent as BedIcon } from '../../assets/bed-solid.svg';
import { ReactComponent as PersonIcon } from '../../assets/user-solid.svg';
import { ReactComponent as WifiIcon } from '../../assets/wifi-solid.svg';
import { ReactComponent as BreakfastIcon } from '../../assets/mug-saucer-solid.svg';

function Rooms({rooms}) {
    return (
        <div className="rooms">
            {rooms.map(({ id, name, price, image, persons, bedType, bedNumber, wifi, breakfast, description }, i) => (

                <div key={id} className="rooms-element">
                    <div className="rooms-image-container">
                        <img className="rooms-image" src={image} alt="Mt Si Summit" />
                    </div>
                    <div className="rooms-info">
                        <div className="rooms-heading">
                            <div className="rooms-title"><span className="rooms-title-text">{name}</span></div>
                            <div className="rooms-price"><span className="rooms-price-text">&#36;{price}</span></div>
                        </div>
                        <ul className="rooms-details">
                            <li><BedIcon className="leaf" /><span>{bedNumber} {bedType.charAt(0).toUpperCase() + bedType.slice(1)} {`${bedNumber > 1 ? 'Beds' : 'Bed'}`}</span></li>
                            <li><PersonIcon className="leaf" /><span>{persons} Persons</span></li>
                            {wifi &&
                                <li><WifiIcon className="leaf" /><span>Wifi</span></li>
                            }
                            {breakfast &&
                                <li><BreakfastIcon className="leaf" /><span>Breakfast</span></li>
                            }
                        </ul>
                        <div className="rooms-description">
                            <p>
                                {description}
                            </p>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default Rooms