import React, { Component } from "react";
import logo from "./images/profile.JPG"; // Tell Webpack this JS file uses this image
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import { Typography, Divider } from "@material-ui/core";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import ProfileCard from "./ProfileCard";
import './index.css';



export default class AboutMe extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: ""
    };
  }

  render() {
    return (
        <div style = {{width : "-webkit-fill-available"}}>
        <Card style={{ width: "-webkit-fill-available" }}>
          <CardContent>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                width: "-webkit-fill-available",
                height: "15vw",
                textAlign: "center",
                alignItems: "center"
              }}
            >
            <div>
              <Typography style = {{fontFamily:"Oswald, sans-serif", fontSize : "2.5vw"}}> About Me </Typography>
              </div>
              <div>
              <Divider style = {{ width : "55vw"}}>

              </Divider>
              </div>
            </div>
            

          </CardContent>
        </Card>
      </div>
    );
  }
}
