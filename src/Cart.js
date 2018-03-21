import React from 'react';
import {NavLink} from 'react-router-dom';
import {getInfoProduct, addPrices, emptyCart, deleteProduct} from './actions';

const CartProduct = ({product, index}) =>
{
    return (
        <div className="cart-product">
            <img src={getInfoProduct(product.id).img} alt="ImageProduct"/>
            <span>{product.quantity}x${(getInfoProduct(product.id).price).toFixed(2)}</span>
            <div className="delete"  onClick={()=>deleteProduct(product.id)}><i className="fa fa-times fa-3x" aria-hidden="true"></i></div>
        </div>
    );
}
const Cart = ({cart}) =>
{
    return (
        <div>
            <div className="row margin">
                <div className="col-lg-8 col-lg-offset-1 col-md-7 col-md-offset-1 col-sm-7 col-sm-offset-1 col-xs-6 col-xs-offset-1 cart">
                    {
                        cart.map((item,index)=>{
                            return <CartProduct key={index} product={item} index={index}/>;
                        })
                    }
                </div>
                <div className="col-lg-2 col-md-3 col-sm-3 col-xs-4 cart-total">
                    <h6 className="less-padding">Your Shopping cart</h6>
                    <h1 className="less-padding">${addPrices().toFixed(2)}</h1>
                    <button className="btn-link btn-empty" onClick={emptyCart}>EMPTY CART</button>
                    <NavLink to="/checkout" className="btn-checkout">CHECKOUT</NavLink>
                </div>
            </div>
        </div>
    );
}
export default Cart;