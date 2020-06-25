import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'

import { auth } from '../../firebase/firebase.utils'
import CartIcon from '../CartIcon/CartIcon'
import CartDropdown from '../CartDropdown/CartDropdown'

import Logo from '../../assets/crown.png'

import './header.scss'

const Header = ({ currentUser, hidden }) => (
    <div className="header">
        <Link className="logo-container" to="/">
            <img src={Logo} className="logo" alt="logo" />
        </Link>
        <div className="options">
            <Link className="option" to="/shop">
                SHOP
            </Link>
            <Link className="option" to="/shop">
                CONTACT
            </Link>
            {currentUser ? (
                <div className="option" onClick={() => auth.signOut()}>
                    SIGN OUT
                </div>
            ) : (
                <Link className="option" to="/signin">
                    SIGN IN
                </Link>
            )}
            <CartIcon />
        </div>
        {hidden ? null : <CartDropdown />}
    </div>
)

const mapStateToProps = (state) => ({
    currentUser: state.user.currentUser,
    hidden: state.cart.hidden,
})

export default connect(mapStateToProps)(Header)
