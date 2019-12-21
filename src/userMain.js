// import React from "react";
// import Footer from "./footer";
// import $ from "jquery";
// import { BrowserRouter as Router, Route, Link } from "react-router-dom";

// import "./App.css";
// import NavAS from "./navAfterSU";

// class UserMain extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       data: []
//     };
//     var that = this;
//   }
//   componentDidMount() {
//     var that = this;
//     var id = window.location.href.split("=")[1];
//     $.ajax({
//       url: "http://localhost:8000/userMain",
//       type: "GET",
//       dataType: "JSON",
//       success: function(data) {
//         //   console.log(data);
//         that.setState({ data: data });
//         console.log(that.state.data);
//       },
//       error: function(err) {
//         console.log(err);
//       }
//     });
//   }
//   render() {
//     console.log(this.state.data);
//     const listItems = this.state.data.map(mainSchema => (
//       <div>
//         <img className="img" src={mainSchema.mainComImg}></img>
//         <p>{mainSchema.mainComDis}</p>
//         <button>
//           <Link to={`/${mainSchema.id}`}>EXPLORE MORE</Link>
//         </button>{" "}
//         <br></br>
//         <br></br>
//       </div>
//     ));
//     return (
//       <div>
//         <NavAS />
//         <ul className="yara">{listItems}</ul>
//         <Footer />
//       </div>
//     );
//   }
// }

// export default UserMain;
