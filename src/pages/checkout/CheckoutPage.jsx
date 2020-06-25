import React from 'react'
import { connect } from 'react-redux'

import CheckoutItem from '../../component/CheckoutItem/CheckoutItem'
import StripeCheckoutButton from '../../component/StripeCheckoutButton/StripeCheckoutButton'

import './checkout.scss'

const CheckoutPage = ({ cartItems, total }) => (
    <div className="checkout-page">
        <div className="checkout-header">
            <div className="header-block">
                <span>Product</span>
            </div>
            <div className="header-block">
                <span>Description</span>
            </div>
            <div className="header-block">
                <span>Quantity</span>
            </div>
            <div className="header-block">
                <span>Price</span>
            </div>
            <div className="header-block">
                <span>Remove</span>
            </div>
        </div>
        {cartItems.map((cartItem) => (
            <CheckoutItem key={cartItem.id} cartItem={cartItem} />
        ))}
        <div className="total">TOTAL: ${total}</div>
        <div className="test-warning">
            *Please use the following test credit card for payments*
            <br />
            4242 4242 4242 4242 - Exp: 01/20 - CVV: 123
        </div>
        <StripeCheckoutButton price={total} />
    </div>
)

const mapStateToProps = (state) => ({
    cartItems: state.cart.cartItems,
    total: state.cart.cartItems.reduce(
        (accumalatedQuantity, cartItem) =>
            accumalatedQuantity + cartItem.quantity * cartItem.price,
        0
    ),
})

export default connect(mapStateToProps)(CheckoutPage)
