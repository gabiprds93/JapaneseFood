import React from 'react';
import Cart from "./Cart"
import {connect} from "redux-zero/react";
import {Header, Footer} from './header';
import {addCart, nextFood, getInfoProduct} from './actions';

const Menu = ({food, selectedFood, cart}) => 
{
    console.log("select", selectedFood);
    return (
        <div>
            <Header cart={cart}/>
            {
                cart.length>0?
                <Cart cart={cart}/>:
                <div></div>
            }
        <div id="ke-menu" className=" container k-whiteFont"> 
            <div className="row" id="details-top-image"></div>
            <div className="row">
                <div>
                    <div className="col-md-1 col-xs-1 col-sm-1 k-back">
                        <a className='btn k-btn' onClick={() => nextFood(-1) }><img src="./img/nav-prev.png"/></a>
                    </div>
                    <div className="col-sm-2 col-md-2 col-xs-12 k-space">
                        <div className="k-buttonsBottom col-md-1 col-xs-1 col-sm-1">
                            <div className=" k-backd">
                                <a className='btn k-btns' onClick={() => nextFood(-1) }><img src="./img/nav-prev.png"/></a>
                            </div>
                        </div>
                        <div className="col-xs-8 k-cd">
                            <img className="k-imgDetails" src={food[selectedFood].img}/>
                        </div>
                        <div className="k-buttonsBottom col-md-1 col-xs-1 col-sm-1">
                            <div className=" k-nextd">
                                <a className='btn k-btns' onClick={() => nextFood(1) }><img src="./img/nav-next.png"/></a>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-5 col-md-5 col-xs-12">
                        <Description selectedFood={selectedFood}/>
                    </div>
                    <div className="col-sm-3 col-md-3 col-xs-12">
                        <Nutrition selectedFood={selectedFood}/>
                    </div>
                    <div className="col-md-1 col-xs-1 col-sm-1 k-next">
                        <a className='btn k-btn' onClick={() => nextFood(1) }><img src="./img/nav-next.png"/></a>
                    </div>
                </div>
            </div>
            <div className="row" id="details-bottom-image"></div>
        </div>
        <Footer />
        </div>
    )
}

const Description =({selectedFood}) => 
{
    return (
        <div>
            <div className="k-detailDes">
                <h3>{getInfoProduct(selectedFood).name}</h3>
                <label>{getInfoProduct(selectedFood).description}</label>
            </div>
            <br />
            <div className="k-priceButton">
                <div className="col-xs-6 col-md-6 col-sm-6">${getInfoProduct(selectedFood).price}</div>
                <button className="buy col-xs-6 col-md-6 col-sm-6" onClick={() => addCart(selectedFood)}>Add to Cart</button>
            </div>
        </div>
    )
}
const Nutrition = ({selectedFood}) => 
{
    return (
        <div className="row">
            <table className="table table-responsive k-table">
                <thead>
                    <tr>
                        <th colSpan="2">Nutritional Information</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Protein</td>
                        <td className="text-right">{getInfoProduct(selectedFood).nutritional[0]}</td>
                    </tr>
                    <tr>
                        <td>Fat (total)</td>
                        <td className="text-right">{getInfoProduct(selectedFood).nutritional[1]}</td>
                    </tr>
                    <tr>
                        <td>Carbohydrate</td>
                        <td className="text-right">{getInfoProduct(selectedFood).nutritional[2]}</td>
                    </tr>
                    <tr>
                        <td>Energy (kJ)</td>
                        <td className="text-right">{getInfoProduct(selectedFood).nutritional[3]}</td>
                    </tr>
                    <tr>
                        <td>Energy (kcal)</td>
                        <td className="text-right">{getInfoProduct(selectedFood).nutritional[4]}</td>
                    </tr>
                    <tr>
                        <td>Sugar</td>
                        <td className="text-right">{getInfoProduct(selectedFood).nutritional[5]}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
}

const mapToProps = ({food, selectedFood, cart}) => ({food, selectedFood, cart});
export default connect(mapToProps)(Menu);