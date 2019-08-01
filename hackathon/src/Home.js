import Map from './Map';
import React, { Component } from 'react';
import { Alert, Collapse, Container, Col, Row, ListGroup, ListGroupItem } from 'reactstrap';
import "./App.css";
import "./bootstrap.css"
  
const markers = [{
    id: 1,
    title: 'Event',
    position:{
      lat: 41.040083,
      lng:-87.900278,
    },
    date: "May 14, 2019",
    time: "5:00 PM – 11:00 PM CDT",
    location: "Lakeshore State Park, 500 North Harbor Drive"
  }]

export default class Home extends Component {
    constructor() {
        super();
        this.state = {
            lat: 43.040083,
            lng: -87.900278,
            info: 0
        }
        this.onMarkerClick = this.onMarkerClick.bind(this);
    }

    onMarkerClick(element, index) {
        this.setState({
            lat: element.position.lat, 
            long: element.position.lng,
            eventInfoToggle: true,
            info: index
        });
    }

    componentWillReceiveProps(nextProps) {
        this.setState({
          lat: nextProps.lat,
          lng: nextProps.lng,
        });
      }

    render() {
        return (
            <div>
            <Container>
                <Row >
                    <Col  style={{height: '60vh', width: '100vh'}} sm="8"><Map lat={this.state.lat} lng={this.state.lng} markers={markers}/></Col>
                    <Col  sm="4">
                        <ListGroup style={{padding: '0px 10px'}}>
                            {markers.map((element, index) => <ListGroupItem onClick={() => this.onMarkerClick(element,index)}>{element.title}</ListGroupItem>)}
                        </ListGroup>
                    </Col>
                </Row>
            </Container>

            <Collapse isOpen={this.state.eventInfoToggle}>
                <Alert color="dark" style={{margin:'5%'}}>
                    <h4>{markers[this.state.info].title}</h4>
                    <h6>When:</h6> <p>{markers[this.state.info].date} {markers[this.state.info].time}</p>
                    <h6>Where:</h6> {markers[this.state.info].location}
                </Alert>
            </Collapse>
            </div>
        );
    }
}