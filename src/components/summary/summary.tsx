import StripeButton from '../stripe-button/stripe-button'

import './summary.scss';

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

const Summary = ({checkout}: CheckoutTypes) => {

    const totalPrice = checkout.reduce(function (acc, obj) { return acc + obj.price; }, 0);

    return (
        
        <div className="summary">
            <div className="summary-total-price">
            <div className="summary-total">
                <div className="summary-total-title"><span className="summary-total-title-text">Total:</span></div>
                <div className="summary-total-price"><span className="summary-total-price-text">&#36;{totalPrice}</span></div>
            </div>
            <StripeButton totalPrice={totalPrice} />
            </div>
            <div className="summary-description">
                <p>Please use test credit card below for payments*</p>
                <p>4242 4242 4242 4242</p>
                <p>Exp: any future date</p>
                <p>CVV: 123</p>
            </div>
        </div>
    )
}

export default Summary;