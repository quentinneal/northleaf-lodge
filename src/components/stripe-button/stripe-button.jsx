import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = ({ totalPrice }) => {
    const priceInCents = totalPrice * 100;
    const key = 'pk_test_51HSDBNF9tDvUZwSBXWgYw49NHuxvCdCJrkiFYd0s2Aj8k3M3nIYmFgQlRJ8yKgun0YSWhbnRi2bq4c8Tf4jn6jM000iwBCyekc';

    const onToken = (token) => {
        alert('Payment accepted!');
    };

    return (
        <StripeCheckout
            label='Pay Now'
            name='NorthLeaf Lodge'
            billingAddress
            shippingAddress
            //image=''
            description={`Your total is $${totalPrice}`}
            amount={priceInCents} // Stripe converts this data to the price.
            panelLabel='Pay Now'
            token={onToken}
            stripeKey={key}>
            <button className="summary-submit">
                <span class="summary-submit-text">Pay Now</span>
            </button>

        </StripeCheckout>
        
    )
}

export default StripeCheckoutButton;