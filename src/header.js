import React from 'react';
import './header.css';
import {NavLink} from 'react-router-dom';
import logo from './images/logo.png';

export const Header = ({cart}) => 
{
    return(
        <div>
            <div className="row" id="header">
                <div className="col-lg-2 col-lg-offset-1 col-md-2 col-md-offset-1 col-sm-2 col-sm-offset-1 col-xs-3 col-xs-offset-1">
                    <NavLink to="/"> 
                        <img src={logo}/>
                    </NavLink>
                </div>
                <div className="col-lg-3 col-lg-offset-5 col-md-3 col-md-offset-5 col-sm-4 col-sm-offset-4 col-xs-6 col-xs-offset-1">
                    {/* <div className="btn-header"> */}
                        <NavLink to="/" id="cart-info"> 
                            Shopping Cart
                            <span><span data-bind="text: cart.contentsCount">{cart.length}</span> items</span>
                        </NavLink>
                    {/* </div> */}
                </div>
            </div>
            <div className="row" id="header-line">
                <div className="col-lg-10 col-lg-offset-1 col-md-10 col-md-offset-1 col-sm-10 col-sm-offset-1 col-xs-9 col-xs-offset-1">
                </div>
            </div>
        </div>        
    )
}

export const Footer = () => 
{
    return (
        <div className="row" id="footer">
            <div className="col-lg-10 col-lg-offset-1 col-md-10 col-md-offset-1 col-sm-10 col-sm-offset-1 col-xs-9 col-xs-offset-1">
                <p>Copyright © 2018</p>                
            </div>
        </div>
    )
}