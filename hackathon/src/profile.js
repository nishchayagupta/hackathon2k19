import React, { Component } from "react";
import logo from "./images/profile.JPG"; // Tell Webpack this JS file uses this image
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import { Typography, Divider } from "@material-ui/core";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import ProfileCard from "./ProfileCard";
import AboutMe from './AboutMe';
import EventList from './EventList';
import Interests from './Interests';

export default class Profile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: ""
    };
  }

  render() {
    return (
      <div style={styles.webkitFill}>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            height: "inherit",
            width: "inherit"
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              height: "inherit",
              width: "60%",
              textAlign: "center",
              alignItems: "center"
            }}
          >
            <ProfileCard style = {{width : "100vw"}}/>
            <br/>
            <AboutMe style = {{width : "100vw"}}/>
            <br/>
            <Interests/>
          </div>
          <div style = {{width : "2%"}}>

          </div>
          <div
            style={{ display: "flex", flexDirection: "column", width: "38%" }}
          >
              <EventList/>
          </div>
          <div>
          
          </div>
        </div>
      </div>
    );
  }
}

const styles = {
  webkitFill: {
    height: "-webkit-fill-available",
    width: "-webkit-fill-available",
    margin : "1vw"
  }
};
