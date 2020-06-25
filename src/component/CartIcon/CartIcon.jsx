import React from 'react'
import { connect } from 'react-redux'

import { toggleCartHidden } from '../../redux/cart/cart.actions'

import ShoppingIcon from '../../assets/shopping-bag.png'

import './cart-icon.scss'

const CartIcon = ({ toggleCartHidden, itemCount }) => (
    <div className="cart-icon" onClick={toggleCartHidden}>
        {/* <ShoppingIcon className="shopping-icon" /> */}
        <img src={ShoppingIcon} className="shopping-icon" alt="ShoppingIcon" />
        <span className="item-count">{itemCount}</span>
    </div>
)

const mapDispatchToProps = (dispatch) => ({
    toggleCartHidden: () => dispatch(toggleCartHidden()),
})

const mapStateToProps = (state) => ({
    itemCount: state.cart.cartItems.length,
})

// const mapStateToProps = createStructuredSelector({
//     itemCount: selectCartItemsCount,
// })

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon)
