import React from 'react';
import './App.css';
import {Header, Footer} from './header';
import { connect } from "redux-zero/react";
import FirstView from "./FirstView"
import Cart from "./Cart"

const App = ({food , cart}) => {
    return (
      <div className="container">
         <Header cart={cart}/>
         {
           cart.length>0?
           <Cart cart={cart}/>:
           <div></div>
         }
         <FirstView food={food}/>
         <Footer />
      </div>
    );
}

const mapToProps = ({food , cart}) => ({food ,cart});
export default connect(mapToProps)(App);