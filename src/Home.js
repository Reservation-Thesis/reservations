import React from "react";
import "./App.css";
import $ from "jquery";
// import Album from "./album";
// import PrimarySearchAppBar from "./NavBar";
import { red } from "@material-ui/core/colors";
// import NavBar from "./NavBar";
import { Route, Link, Switch, BrowserRouter as Router } from "react-router-dom";
import Navbar from "./Nav";

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: []
    };
    var that = this;
  }

  componentDidMount() {
    var that = this;
    var id = window.location.href.split("=")[1];
    $.ajax({
      url: "http://localhost:8000/",
      type: "GET",
      dataType: "JSON",
      success: function(data) {
        that.setState({ data: data });
        console.log(that.state.data);
      },
      error: function(err) {
        console.log(err);
      }
    });
  }

  render() {
    console.log(this.state.data);
    const listItems = this.state.data.map(mainSchema => (
      <div>
        <img className="mainImg" src={mainSchema.mainComImg}></img>
        <p>{mainSchema.mainComDis}</p>
        <button>
          <Link to={`/${mainSchema.id}`}>EXPLORE MORE</Link>
        </button>{" "}
        <br></br>
        <br></br>
      </div>
    ));
    return (
      <div>
        <Navbar />

        <ul className="yara">{listItems}</ul>
      </div>
    );
  }
}

export default Home;
