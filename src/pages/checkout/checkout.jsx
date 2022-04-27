import React from 'react';

import './checkout.scss';

import Room1 from '../../assets/imageone.jpg';

import Room2 from '../../assets/DSC00885.jpg'

import { ReactComponent as BedIcon } from '../../assets/bed-solid.svg';
import { ReactComponent as PersonIcon } from '../../assets/user-solid.svg';
import { ReactComponent as WifiIcon } from '../../assets/wifi-solid.svg';
import { ReactComponent as BreakfastIcon } from '../../assets/mug-saucer-solid.svg';

import { Link } from 'react-router-dom';

function Rooms() {
    return (
        <div className="checkout">
            <div className="summary">
                <div className="summary-total">
                    <div className="summary-total-title"><span className="summary-total-title-text">Total:</span></div>
                    <div className="summary-total-price"><span className="summary-total-price-text">$200</span></div>
                </div>
                <div className="summary-description">
                    <p>Please use test credit card below for payments*</p>
                    <p>4242 4242 4242 4242</p>
                    <p>Exp: any future date</p>
                    <p>CVV: 123</p>
                </div>
                <Link className="summary-submit" to="/search"><span className="summary-submit-text">Pay Now</span></Link>
            </div>
            <div className="details">
                <div className="details-element">
                    <div className="details-image-container">
                        <img className="details-image" src={Room1} alt="Mt Si Summit" />
                    </div>
                    <div className="details-info">
                        <div className="details-heading">
                            <div className="details-title"><span className="details-title-text">Garden Room</span></div>
                            <div className="details-price"><span className="details-price-text">$85</span></div>
                        </div>
                        <ul className="details-amenities">
                            <li><BedIcon className="leaf" /><span>2 Queen Beds</span></li>
                            <li><PersonIcon className="leaf" /><span>2 Persons</span></li>
                            <li><WifiIcon className="leaf" /><span>Wifi</span></li>
                            <li><BreakfastIcon className="leaf" /><span>Breakfast</span></li>
                        </ul>
                        <div className="details-description">
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et 
                            dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea 
                            commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla 
                            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="details-element">
                    <div className="details-image-container">
                        <img className="details-image" src={Room2} alt="Mt Si Summit" />
                    </div>
                    <div className="details-info">
                        <div className="details-heading">
                            <div className="details-title"><span className="details-title-text">Garden Room</span></div>
                            <div className="details-price"><span className="details-price-text">$85</span></div>
                        </div>
                        <ul className="details-amenities">
                            <li><BedIcon className="leaf" /><span>2 Queen Beds</span></li>
                            <li><PersonIcon className="leaf" /><span>2 Persons</span></li>
                            <li><WifiIcon className="leaf" /><span>Wifi</span></li>
                            <li><BreakfastIcon className="leaf" /><span>Breakfast</span></li>
                        </ul>
                        <div className="details-description">
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et 
                            dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea 
                            commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla 
                            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="details-element">
                    <div className="details-image-container">
                        <img className="details-image" src={Room1} alt="Mt Si Summit" />
                    </div>
                    <div className="details-info">
                        <div className="details-heading">
                            <div className="details-title"><span className="details-title-text">Garden Room</span></div>
                            <div className="details-price"><span className="details-price-text">$85</span></div>
                        </div>
                        <ul className="details-amenities">
                            <li><BedIcon className="leaf" /><span>2 Queen Beds</span></li>
                            <li><PersonIcon className="leaf" /><span>2 Persons</span></li>
                            <li><WifiIcon className="leaf" /><span>Wifi</span></li>
                            <li><BreakfastIcon className="leaf" /><span>Breakfast</span></li>
                        </ul>
                        <div className="details-description">
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et 
                            dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea 
                            commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla 
                            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Rooms;