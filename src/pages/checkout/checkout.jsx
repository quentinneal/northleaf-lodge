import './checkout.scss';

import { useSelector } from "react-redux"

import Summary from '../../components/summary/summary';
import CheckoutRooms from  '../../components/checkoutRooms/checkoutRooms'

const Checkout = () => {

    const { checkout } = useSelector((state) => state.checkout);

    return (
        <main className="checkout">
            <Summary checkout={checkout}/>
            <CheckoutRooms checkout={checkout}/>
        </main>
    );
}

export default Checkout;