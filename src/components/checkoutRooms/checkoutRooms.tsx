import './checkoutRooms.scss';

import Room from '../room/room'

type CheckoutTypes = {
    checkout: {
    id: string,
    name: string,
    price: number,
    image: string,
    bedType: string,
    persons: string,
    wifi: boolean,
    breakfast: boolean,
    bedNumber: number,
    description: string,
    }[]
}

const CheckoutRooms = ({checkout}: CheckoutTypes) => {

    return (
        <div className="checkout-rooms">
            {checkout.map((room, i) => (
                <Room key={room.id} room={room}/>
            ))}
        </div>
    )
}

export default CheckoutRooms;