import React, { Component } from 'react';
import { Alert, Button, ListGroup, ListGroupItem, Row, Col } from 'reactstrap';
import "./App.css";
import "./bootstrap.css"
import chat from './chat.png';

export default class Home extends Component {

    render() {
        return (
            <div>
                <div class="description"><h3>2019 Milwaukee Comedy Festival in Milwaukee</h3><p>The Milwaukee Comedy Festival is the largest multi-day comedy event in Milwaukee and the state of Wisconsin. We bring audiences the best stand up, improv and sketch comedy talent possible and establish an environment where performers can create new and exciting comedy together.

The Milwaukee Comedy Festival features multiple days of live comedy shows, special events, and headliners offering the ultimate comedy experience. Every show is unique and combines different styles of comedy like sketch and improvisation along side stand up comedy.</p><p><i>Friday, Aug 2, 7:30 PM</i></p><p>The Underground Collaborative</p>
                <Button style={{margin:'5px'}}>Attend</Button>
                <Button style={{margin:'5px'}}>Groupon Link</Button>
                </div>
                <Row style={{padding: '15px'}}>
                <Col style={{'text-align': 'center'}} class="chat-container"><p>Chat with others about this event!</p><img alt="chat room" src={chat}></img></Col>
                <Col style={{'background-color': '#dbffc7', 'text-align': 'center', 'right': '75px'}} class="attendee-list"><p>Who's going?</p>
                <ListGroup>
                    <ListGroupItem>Erin Fink</ListGroupItem>
                    <ListGroupItem>Kailen Dobias</ListGroupItem>
                    <ListGroupItem>Nischaya Gupta</ListGroupItem>
                    <ListGroupItem>Jennifer Oaks</ListGroupItem>
                    <ListGroupItem>Nicholas Kumar</ListGroupItem>
                    <ListGroupItem>Avery Peck</ListGroupItem>
                    <ListGroupItem>Anthony Villanueva</ListGroupItem>
                </ListGroup></Col>
                </Row>
            </div>
        );
    }
}