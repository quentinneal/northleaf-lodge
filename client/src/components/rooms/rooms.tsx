import { Link } from 'react-router-dom';
import { useDispatch } from "react-redux"

import { addToCheckout } from '../../features/checkout/checkoutSlice'

import './rooms.scss';

import Room from '../room/room'

type RoomsDisplayTypes = {
    roomsDisplay: {
    id: string,
    name: string,
    price: number,
    image: string,
    bedtype: string,
    persons: string,
    wifi: boolean,
    breakfast: boolean,
    bednumber: number,
    description: string,
    }[]
}

function Rooms({roomsDisplay}: RoomsDisplayTypes) {
    const dispatch = useDispatch();

    const handleCheckout = (i: number) => {
        let roomsCopy = [...roomsDisplay];
        roomsCopy = [roomsCopy[i]];
        dispatch(addToCheckout(roomsCopy));
      };
    
    return (
        <div className="rooms">
            {roomsDisplay.map((room, i) => (
                <Room key={room.id} room={room} button={<Link className="room-checkout-button" onClick={() => handleCheckout(i)} to="/checkout"><span className="room-checkout-button-text">Select Room</span></Link>}/>
            ))}
        </div>
    );
}

export default Rooms