import logo from './logo.svg';
import './App.css';

import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

//import { products } from "./products";
//import Nav from "./navigation";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ProductList: [
        {
          id: 1,
          title: "Unisex Cologne",
          quantity: 0,
          img: "/products/cologne.jpg",
          done: false
        },
        { id: 2, 
          title: "Apple iWatch", 
          quantity: 0, 
          img: "/products/iwatch.jpg",
          done: false },
        {
          id: 3,
          title: "Unique Mug",
          quantity: 0,
          img: "/products/mug.jpg",
          done: false
        },
        {
          id: 4,
          title: "Mens Wallet",
          quantity: 0,
          img: "/products/wallet.jpg",
          done: false
        }
      ],
    }
  }


render () {
  let item;
  let itemCount;
  item = <Items itemlists={this.state.ProductList} />;

  itemCount = <Totals counts={this.state.ProductList} />;

  return (
    {},
    (
      <div className="App">
        <div className="navbar p-5 bg-info">
        <h1>
          <span className="px-2">
          Shop to React </span>
          </h1>

          <div>
        <FontAwesomeIcon icon={faShoppingCart} /> 
        <span className=""> {itemCount}</span>
       </div>
        </div>
        
        {item}
      </div>
    )
  );
}
}

function Totals (props) {
  let total = 0;

  total = props.counts.map(counts => counts.quantity).reduce((prev, next) => prev + next);
  
  return (
    <div> {total} items </div>

  )
}

function Items(props) {
  return (
    <div>
    {props.itemlists.map((ProductList) => (
      <div id="items">
      <h3 tag="a" href="#" className="mx-5">{ProductList.title}</h3>
      <img src={ProductList.img} width="150" />
      <span className="mx-5 p-3 border border-3">
      {ProductList.quantity}</span> quantity
      </div>
    ))}
     </div>
  );
}

export default App;
