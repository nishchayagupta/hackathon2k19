import React, { Component } from 'react';
import { Navbar, Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
import logo from './logo.png';

export default class Header extends Component {
    constructor() {
        super();
        this.state = {
            dropdownOpen: false,
        }
        this.toggle = this.toggle.bind(this);
    }

    toggle() {
        this.setState(prevState => ({
            dropdownOpen: !prevState.dropdownOpen
          }));
    }

    clickAbout() {
        window.location.href = "/about-me";
    }

    clickHome() {
        window.location.href = "/";
    }

 render() {
    return (
        <div>
            <Navbar fluid style={{'background-color': 'lightblue', 'margin-bottom': '10px'}}>
            <Dropdown isOpen={this.state.dropdownOpen} toggle={this.toggle}>
                <DropdownToggle caret>
                Menu
                </DropdownToggle>
                <DropdownMenu>
                    <DropdownItem onClick={this.clickHome}>Home</DropdownItem>
                    <DropdownItem onClick={this.clickAbout}>About Me</DropdownItem>
                </DropdownMenu>
            </Dropdown>
                <h1 className="display-6">Beyond Mason Street</h1>
                <img style={{'height': '100px'}} src={logo}/>
            </Navbar>
        </div>
        );
    }
};