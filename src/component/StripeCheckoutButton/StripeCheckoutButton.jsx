import React from 'react'
import StripeCheckout from 'react-stripe-checkout'

const StripeCheckoutButton = ({ price }) => {
    const priceForStripe = price * 100
    const publishableKey =
        'pk_test_51GvimRGi9AeH6RzjnhLrM60CqNHf6uZmO3mNxOIvyXvPwSNrA8TAZejjJjivsyrJHzh4ZSbUnyjtCBR73wVp0IHi00U0V8HhEP'

    const onToken = (token) => {
        console.log(token)
        alert('Payment Succesful!')
    }

    return (
        <StripeCheckout
            label="Pay Now"
            name="React Ecommerce"
            billingAddress
            shippingAddress
            image="https://svgshare.com/i/CUz.svg"
            description={`Your total is $${price}`}
            amount={priceForStripe}
            panelLabel="Pay Now"
            token={onToken}
            stripeKey={publishableKey}
        />
    )
}

export default StripeCheckoutButton
