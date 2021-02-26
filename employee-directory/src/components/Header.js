import React, { Component } from 'react';
//import the header
import "../styles/Header.css";
//render header here
export default class Header extends Component {
  render() {
    return (
      <div className="header">
        <h1>Employee Directory</h1>
        <p>Type in your employees name to narrow down your results!</p>
      </div>
    )
  }
}