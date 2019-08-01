import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Home from './Home';
import Header from './Header';
import Profile from './profile';

function BasicExample() {
  return (
    <><Header/>

    <Router>
        <Route exact path="/about-me" component={Profile} />
        <Route exact path="/" component={Home} />
    </Router></>
  );
}

export default BasicExample;