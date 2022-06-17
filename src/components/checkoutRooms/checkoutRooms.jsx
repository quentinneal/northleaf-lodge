import './checkoutRooms.scss';

import Room from '../room/room'

const CheckoutRooms = ({checkout}) => {

    return (
        <div className="checkout-rooms">
            {checkout.map((room, i) => (
                <Room key={room.id} room={room} i={i}/>
            ))}
        </div>
    )
}

export default CheckoutRooms;