import React, { Component } from "react";
import "./App.css";
import $ from "jquery";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import Typography from "@material-ui/core/Typography";
import Calender from "./Calender";
import SimpleImageSlider from "react-simple-image-slider";

export default class ItemComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: "",
      location: "",
      imageSlider: [],
      mainImage: "",
      name: "",
      price: "",
      contactInfo: "",
      details: ""
    };
  }
  componentDidMount() {
    var that = this;
    var path = window.location.href;
    var myPath = path.split("/");
    var id = myPath[1];
    if (id === "") {
      id = 9;
    }
    // console.log(id_);
    $.ajax({
      type: "GET",
      url: `/item/${id}` + that.state.id,
      data: { id: id },

      //       url: "/Appointments",
      //       type: "GET",
      dataType: "JSON",
      //   dataType: "application/json",
      success: function(data) {
        console.log("ajax", data);
        that.setState({
          id: data.id,
          location: data.location,
          imageSlider: data.imageSlider,
          mainImage: data.image,
          name: data.name,
          price: data.price,
          contactInfo: data.contactInfo,
          details: data.description
        });
        console.log("DONE!");
        console.log("HERE IS THE DATA", data);
        console.log(that.state.imageSlider);
      },
      error: function(err) {
        console.log(err, "there is error in my sweet function!");
      }
    });
  }

  render() {
    const useStyles = makeStyles({
      card: {
        minWidth: 400,
        // minHeight: 600,
        float: "left",
        marginLeft: "30%",

        marginTop: "3rem",
        fontSize: "36px"
      },
      media: {
        // height: 500
      }
    });
    var that = this;
    var MediaCard = function() {
      const classes = useStyles();

      return (
        <>
          <Card className={classes.card}>
            {/* <CardActionArea> */}
            {/* <CardMedia
                className={classes.media}
                // image={that.state.mainImage}
                title="marrge hall"
              /> */}
            {/* <CardContent> */}
            <Typography
              gutterBottom
              variant="h5"
              component="h2"
              style={{ fontSize: "2.5rem" }}
            >
              <center style={{ color: "#8D1B31", fontSize: "4rem" }}>
                {that.state.name}
              </center>
            </Typography>
            <Typography
              variant="body2"
              color="textSecondary"
              component="p"
              style={{ fontSize: "1.5rem" }}
            >
              <div
                style={{
                  marginRight: "3em",
                  marginTop: "2em",
                  marginLeft: "3em"
                }}
              >
                <center>
                  <h2 style={{ color: "#A44D5E" }}>
                    {that.state.price} per Hour
                  </h2>
                  <h2 style={{ color: "#A44D5E" }}>
                    Details : {that.state.details}
                  </h2>
                  <h2 style={{ color: "#A44D5E", marginBottom: "1rem" }}>
                    {" "}
                    Contact Info : {that.state.contactInfo} <br />
                  </h2>
                </center>
              </div>
            </Typography>
            {/* </CardContent> */}
            {/* </CardActionArea> */}
            {/* <CardActions> */}
            {/* <Button
                variant="contained"
                color="secondary"
                style={{
                  height: "4rem",
                  fontSize: "1.5rem",
                  marginLeft: "10rem"
                }}
              >
                reserve now!
              </Button> */}
            {/* <Button
                variant="contained"
                color="secondary"
                style={{
                  height: "4rem",
                  fontSize: "1.5rem",
                  marginRight: "6rem"
                }}
              >
                see available time
              </Button> */}
            {/* </CardActions> */}
          </Card>
        </>
      );
    };
    ///
    return (
      <div>
        {" "}
        {/* <NavBar /> */}
        <span style={{ display: "block" }}>
          <center>
            <SimpleImageSlider
              style={{ marginTop: "8rem" }}
              width={"80%"}
              height={400}
              images={this.state.imageSlider}
            />
            <center>
              <iframe
                //   src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13536.790522042322!2d35.83889189999999!3d31.9826576!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x151ca185283dfb89%3A0x611dda32fcd10faa!2z2LPZitiq2Yog2YXZiNmE!5e0!3m2!1sar!2sjo!4v1575807547103!5m2!1sar!2sjo"
                src={this.state.location}
                width="80%"
                height="300"
                frameborder="0"
                style={{
                  border: "1",
                  float: "right",
                  marginTop: "3rem",
                  marginRight: "12.3rem"
                }}
                allowfullscreen=""
              ></iframe>
            </center>
            <MediaCard />
            <div style={{ width: "80%", height: "15%" }}>
              <Calender />
            </div>
          </center>
        </span>
        {/* <iframe
          //   src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13536.790522042322!2d35.83889189999999!3d31.9826576!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x151ca185283dfb89%3A0x611dda32fcd10faa!2z2LPZitiq2Yog2YXZiNmE!5e0!3m2!1sar!2sjo!4v1575807547103!5m2!1sar!2sjo"
          src={this.state.location}
          width="1200"
          height="300"
          frameborder="0"
          style={{ border: "1", float: "right", marginTop: "3rem" }}
          allowfullscreen=""
        ></iframe> */}
      </div>
    );
  }
}
