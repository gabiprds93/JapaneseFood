import React from 'react';
import Cart from "./Cart"
import {connect} from "redux-zero/react";
import {Header, Footer} from './header';
import {addCart, nextFood, getInfoProduct} from './actions';

const Menu = ({food, selectedFood, cart}) => 
{
    console.log("select", selectedFood);
    return (
        <div className="">
            <Header cart={cart}/>
            {
                cart.length>0?
                <Cart cart={cart}/>:
                <div></div>
            }
            <div id="menu" className="container whiteFont"> 
                <div className="row" id="details-top-image"></div>
                <div className="row">
                    <div>
                        <div className="col-lg-1 col-md-1 col-xs-1 col-sm-1 back">
                            <a className='btn btn-next' onClick={() => nextFood(-1) }><img src="./img/nav-prev.png"/></a>
                        </div>
                        <div className="col-lg-2 col-md-3 col-sm-3 col-xs-12 space">
                            <div className="buttonsBottom col-xs-1">
                                <div className=" backd">
                                    <a className='btn btns-next' onClick={() => nextFood(-1) }><img src="./img/nav-prev.png"/></a>
                                </div>
                            </div>
                            <div className="col-lg-12 col-md-12 col-sm-12 col-xs-5 cd">
                                <img className="imgDetails" src={food[selectedFood].img}/>
                            </div>
                            <div className="buttonsBottom col-xs-1">
                                <div className=" nextd">
                                    <a className='btn btns-next' onClick={() => nextFood(1) }><img src="./img/nav-next.png"/></a>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-5 col-md-4 col-sm-4 col-xs-12">
                            <Description selectedFood={selectedFood}/>
                        </div>
                        <div className="col-lg-3 col-md-3 col-sm-3 col-xs-12">
                            <Nutrition selectedFood={selectedFood}/>
                        </div>
                        <div className="col-lg-1 col-md-1 col-sm-1 col-xs-1 next">
                            <a className='btn btn-next' onClick={() => nextFood(1) }><img src="./img/nav-next.png"/></a>
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
            <div className="detailDes">
                <h3>{getInfoProduct(selectedFood).name}</h3>
                <label>{getInfoProduct(selectedFood).description}</label>
            </div>
            <br />
            <div className="priceButton">
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
            <table className="table table-responsive nutrition-table">
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