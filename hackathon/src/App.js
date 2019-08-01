import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Home from './Home';
import Header from './Header';
import AboutMe from './AboutMe';

function BasicExample() {
  return (
    <><Header/>

    <Router>
        <Route exact path="/about-me" component={AboutMe} />
        <Route exact path="/" component={Home} />
    </Router></>
  );
}

export default BasicExample;