import React from 'react';
import './header.css';
import {NavLink} from 'react-router-dom';
export const Header = ({cart}) => 
{
    return (
        <div id="mar-header">
            <h1 className="logo"><a href="#/"></a></h1>
            <div className="btn-header">
                <NavLink to="/" id="cart-info"> Shopping Cart
                    {/* <a id="cart-info" href="#">Shopping Cart */}
                        <span><span data-bind="text: cart.contentsCount">{cart.length}</span> items</span>
                    {/* </a> */}
                </NavLink>
            </div>
        </div>
    )
}

export const Footer = () => 
{
    return (
        <div id="footer">
            <p>Copyright © 2018</p>
        </div>
    )
}