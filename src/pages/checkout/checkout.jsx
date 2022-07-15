import { useSelector } from "react-redux"

import './checkout.scss';

import Summary from '../../components/summary/summary';
import CheckoutRooms from  '../../components/checkoutRooms/checkoutRooms'

const Checkout = () => {

    const { checkout } = useSelector((state) => state.checkout);

    return (
        <main className="checkout">
            <CheckoutRooms checkout={checkout}/>
            <Summary checkout={checkout}/>
        </main>
    );
}

export default Checkout;