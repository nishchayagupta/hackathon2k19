import Map from './Map';
import React, { Component } from 'react';
import { Container, Col, Row, ListGroup, ListGroupItem } from 'reactstrap';
import "./App.css";
import "./bootstrap.css"

export default class Home extends Component {
    render() {
        return (
            <Container>
                <Row >
                    <Col  style={{height: '60vh', width: '100vh'}} sm="8"><Map/></Col>
                    <Col  sm="4">
                        <ListGroup style={{padding: '0px 10px'}}>
                            <ListGroupItem>Event 1</ListGroupItem>
                            <ListGroupItem>Event 2</ListGroupItem>
                        </ListGroup>
                    </Col>
                </Row>
            </Container>
        );
    }
}