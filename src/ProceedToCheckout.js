import React from "react";
import Checkout from "./Checkout";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

export default class ProceedToCheckout extends React.Component {
  render() {
    return (
      <div>
        <Checkout />
      </div>
    );
  }
}
