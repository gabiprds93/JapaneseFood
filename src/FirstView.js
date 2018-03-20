import React from 'react';
import {addCart, changeSelectedFood} from './actions';
import {NavLink} from 'react-router-dom';

const Product = ({item, index}) => 
{
    return(

        <div  className='col-lg-10 col-md-10 col-xs-10 ha-products'>
            <div className="ha-img">
                <img src={item.img} alt="ImageProduct"/>
                <NavLink className="ha-arrow" to="/viewproduct" onClick={()=>changeSelectedFood(index)}><img className="img-arrow" src="img/arrow-right.png" alt="Arrow-Right"/></NavLink>
            </div>
            <NavLink to="/viewproduct" onClick={()=>changeSelectedFood(index)}><strong>{item.name}</strong></NavLink>
            <span className='ha-price'><span>$</span><span >{(item.price).toFixed(2)}</span></span>
            <button className='ha-btn'onClick={ () => addCart(index)}>+ Add to cart</button>
        </div>
    )
}

const FirstView = ({food}) => 
{
    return(
        <div className="container">
            <div className="ha-ubication">
            {
                food.map((item, index)=>{
                return <Product key ={index} item={item} index={index}/>
                })
            }
            </div>
        </div>
    )
}
export default FirstView;