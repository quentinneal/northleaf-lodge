import './rooms.scss';

import { Link } from 'react-router-dom';

import Room from '../room/room'

import { useDispatch } from "react-redux"
import { addToCheckout } from '../../features/checkout/checkoutSlice.js'

function Rooms({roomsDisplay}) {
    const dispatch = useDispatch();

    const handleCheckout = (i) => {
        let roomsCopy = [...roomsDisplay]; // Copy state to avoid mutation
        roomsCopy = [roomsCopy[i]];
        dispatch(addToCheckout(roomsCopy));
      };
    
    return (
        <div className="rooms">
            {roomsDisplay.map((room, i) => (
                <Room key={room.id} room={room} i={i} button={<Link onClick={() => handleCheckout(i)} to="/checkout">Select Room</Link>}/>
            ))}
        </div>
    );
}

export default Rooms