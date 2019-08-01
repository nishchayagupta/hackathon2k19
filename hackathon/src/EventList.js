import React, { Component } from "react";
import logo from "./images/profile.JPG"; // Tell Webpack this JS file uses this image
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import { Typography, Divider } from "@material-ui/core";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import ProfileCard from "./ProfileCard";
import "./index.css";
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";

export default class EventList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedIndex: 1
    };
  }

  handleListItemClick(event, index) {
    this.setState({ selectedIndex: index });
  }



  render() {
    console.log(this.state.events);
    return (
      <div
        style={{
          width: "-webkit-fill-available",
          height: "-webkit-fill-available"
        }}
      >
        <Card
          style={{
            width: "-webkit-fill-available",
            height: "-webkit-fill-available"
          }}
        >
          <CardContent>
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                width: "-webkit-fill-available",
                height: "-webkit-fill-available",
                textAlign: "center",
                alignItems: "center"
              }}
            >
              <div
                style={{
                  width: "100%",
                  height: "100%",
                  margin: "1vw"
                }}
              >
                <Typography
                  id="ProfileTitleName"
                  style={{ fontSize: "2.5vw", marginTop: "2vw" }}
                >
                  My Events
                </Typography>
                <br />
                <Divider />
                <br />
                <List
                  component="nav"
                  aria-label="main mailbox folders"
                  style={{
                    width: "-webkit-fill-available",
                    height: "-webkit-fill-available"
                  }}
                >
                  <ListItem
                    button
                    selected={this.state.selectedIndex === 0}
                    onClick={event => this.handleListItemClick(event, 0)}
                  >
                    <ListItemText primary= "Event 1" />
                  </ListItem>

                  <ListItem
                    button
                    selected={this.state.selectedIndex === 0}
                    onClick={event => this.handleListItemClick(event, 0)}
                  >
                    <ListItemText primary= "Event 2" />
                  </ListItem>

                  <ListItem
                    button
                    selected={this.state.selectedIndex === 0}
                    onClick={event => this.handleListItemClick(event, 0)}
                  >
                    <ListItemText primary= "Event 3" />
                  </ListItem>

                  <ListItem
                    button
                    selected={this.state.selectedIndex === 0}
                    onClick={event => this.handleListItemClick(event, 0)}
                  >
                    <ListItemText primary= "Event 4" />
                  </ListItem>

                  <ListItem
                    button
                    selected={this.state.selectedIndex === 0}
                    onClick={event => this.handleListItemClick(event, 0)}
                  >
                    <ListItemText primary= "Event 5" />
                  </ListItem>

                  <ListItem
                    button
                    selected={this.state.selectedIndex === 0}
                    onClick={event => this.handleListItemClick(event, 0)}
                  >
                    <ListItemText primary= "Event 6" />
                  </ListItem>
                </List>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    );
  }
}
