import './App.css';

import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";



function Nav(props) {
    return (
          <div className="navbar p-5 bg-info">
            <h1>
                <span className="px-2">Shop to React</span>
            </h1>
            <p className="text-white">
                <FontAwesomeIcon
                  icon={faShoppingCart}
                  className="fas fa-lg mx-3 text-white"
                />
              <span className="font-weight-bold text-white">
                {props.ItemCount}
              </span>
              <span> items</span>
            </p>
          </div>
    );
  }
  
  export default Nav;