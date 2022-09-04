import logo from './logo.svg';
import './App.css';

import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Nav(props) {
  return (
    <div className="navbar">
      <h1>
        <span>Shop to React </span> </h1> 
    </div>
        <FontAwesomeIcon icon={faShoppingCart} />
  )
}

     // <header className="App-header">
    //  <img src={logo} className="App-logo" alt="logo" />
    // <p>
    //  Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //      <a
     //       className="App-link"
     //       href="https://reactjs.org"
      //      target="_blank"
      //      rel="noopener noreferrer"
      //    >
       //     Learn React
      //    </a>
      //  </header>
     // </div></>
//  );
// }

export default App;