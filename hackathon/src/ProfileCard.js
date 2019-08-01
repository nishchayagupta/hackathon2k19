import React, { Component } from "react";
import logo from "./images/profile.JPG"; // Tell Webpack this JS file uses this image
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import { Typography, Divider } from "@material-ui/core";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import ProfileCard from "./ProfileCard";
import "./images/fonts.css";

export default class AboutMe extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: ""
    };
  }

  render() {
    return (
      <div style={{ width: "-webkit-fill-available" }}>
        <Card
          style={{
            width: "-webkit-fill-available"
          }}
        >
          <CardContent>
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                width: "-webkit-fill-available",
                height: "15vw",
                textAlign: "center",
                alignItems: "center"
              }}
            >
              <div>
                <Avatar
                  src={logo}
                  style={{
                    margin: 10,
                    width: "10vw",
                    height: "10vw",
                    boxShadow: "1px 5px 5px black"
                  }}
                />
              </div>
              <div style={{ width: "3vw" }} />

              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignText: "left",
                  justifyContent: "left",
                  alignItems: "left",
                  width: "-webkit-fill-available"
                }}
              >
                <Typography
                  id="ProfileTitleName"
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    width: "-webkit-fill-available",
                    fontSize: "2.5vw"
                  }}
                >
                  {" "}
                  Nishchaya Gupta{" "}
                </Typography>
                <div style={{ height: "1vw" }} />
                <Divider />
                <div style={{ height: "1vw" }} />

                <Typography
                  id="Profiletitles"
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    fontSize: "1.25vw"
                  }}
                >
                  {" "}
                  Age : 120{" "}
                </Typography>

                <div style={{ height: "1vw" }} />
                <Divider />
                <div style={{ height: "1vw" }} />

                <Typography
                  id="Profiletitles"
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    fontSize: "1.25vw"
                  }}
                >
                  {" "}
                  School : Indiana University{" "}
                </Typography>
                <div style={{ height: "1vw" }} />
                <Divider />
                <div style={{ height: "1vw" }} />

                <Typography
                  id="Profiletitles"
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    fontSize: "1.25vw"
                  }}
                >
                  {" "}
                  Department : Law and Public affairs{" "}
                </Typography>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    );
  }
}
