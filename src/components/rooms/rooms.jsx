import { Link } from 'react-router-dom';
import { useDispatch } from "react-redux"

import { addToCheckout } from '../../features/checkout/checkoutSlice.js'

import './rooms.scss';

import Room from '../room/room'

function Rooms({roomsDisplay}) {
    const dispatch = useDispatch();

    const handleCheckout = (i) => {
        let roomsCopy = [...roomsDisplay];
        roomsCopy = [roomsCopy[i]];
        dispatch(addToCheckout(roomsCopy));
      };
    
    return (
        <div className="rooms">
            {roomsDisplay.map((room, i) => (
                <Room key={room.id} room={room} i={i} button={<Link className="room-checkout-button" onClick={() => handleCheckout(i)} to="/checkout"><span className="room-checkout-button-text">Select Room</span></Link>}/>
            ))}
        </div>
    );
}

export default Rooms