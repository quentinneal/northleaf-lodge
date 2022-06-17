import './summary.scss';

import { Link } from 'react-router-dom';

const Summary = ({checkout}) => {

    const totalPrice = checkout.reduce(function (acc, obj) { return acc + obj.price; }, 0);

    return (
        
        <div className="summary">
            <div className="summary-total">
                <div className="summary-total-title"><span className="summary-total-title-text">Total:</span></div>
                <div className="summary-total-price"><span className="summary-total-price-text">&#36;{totalPrice}</span></div>
            </div>
            <div className="summary-description">
                <p>Please use test credit card below for payments*</p>
                <p>4242 4242 4242 4242</p>
                <p>Exp: any future date</p>
                <p>CVV: 123</p>
            </div>
            <Link className="summary-submit" to="/checkoutComplete"><span className="summary-submit-text">Pay Now</span></Link>
        </div>
    )
}

export default Summary;