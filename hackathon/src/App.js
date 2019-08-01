import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Home from './Home';
import Header from './Header';
import Profile from './profile';
import Event from './Event';

function BasicExample() {
  return (
    <><Header/>

    <Router>
        <Route exact path="/about-me" component={Profile} />
        <Route exact path="/event" component={Event} />
        <Route exact path="/" component={Home} />
    </Router></>
  );
}

export default BasicExample;