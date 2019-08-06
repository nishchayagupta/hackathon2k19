import Map from './Map';
import React, { Component } from 'react';
import { Alert, Collapse, Container, Col, Row, ListGroup, ListGroupItem } from 'reactstrap';
import "./App.css";
import "./bootstrap.css"
  
const convertTime = (time) => {
    const timeArray = time.split(',');
    const dow = timeArray[0];
    const month = timeArray[1].split(' ')[0];
    const day = timeArray[1].split(' ')[1];
    return {dow: dow, month: month, day: day}
}

const markers = [{

    id: 1,

    title: ' 2019 Milwaukee Comedy Festival in Milwaukee',

    position:{

      lat: 43.038551,

      lng: -87.9144907,

    },

    date: "Friday, Aug 2",

    time: "7:30 PM CDT",

    location: "The Underground Collaborative "

  } ,

{

    id: 2,

    title: 'Milwaukee Irish Fest',

    position:{

      lat: 43.0331839,

      lng: -87.8987917,

    },

    date: " Thursday, Aug 15",

    time: "5:00 PM – 10:00 PM CDT",

    location: " Henry Maier Festival Park"

  } ,

{

    id: 3,

    title: 'Code + Brews MKE',

    position:{

      lat: 43.0213768,

      lng: -87.9130683,

    },

    date: "Saturday, Aug 3",

    time: "9:00 AM – 12:00 PM CDT",

    location: " Wantable, Inc. Headquarters "

  } ,

{

    id: 5,

    title: ' Wisconsin State Fair',

    position:{

      lat: 43.0213952,

      lng: -88.0166571,

    },

    date: "Thursday, Aug 1",

    time: "8:00 AM – 11:00 PM CDT",

    location: "Wisconsin State Fair Park"

  } ,

{

    id: 6,

    title: '2019 Urban Island Beach Party',

    position:{

      lat: 43.0336327,

      lng:-87.8955177,

    },

    date: "Friday, Aug 2",

    time: "5:00 PM – 11:00 PM CDT",

    location: "Lakeshore State Park, 500 North Harbor Drive"

  }
]

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
            <div style={{margin:'2% 5% 2% 5%'}}>
                Beyond Mason St connects the city to its people. Explore an event’s details to chat with others interested, check who is going, and share the event with your coworkers. Design your profile and check-in to your favorite places.
                Discover what lies beyond Mason St coordinating and connecting with your city and its people.
            </div>

            <Container>
                <Row >
                    <Col  style={{height: '60vh', width: '100vh'}} sm="8"><Map lat={this.state.lat} lng={this.state.lng} markers={markers}/></Col>
                    <Col  sm="4">
                        <ListGroup style={{padding: '0px 10px'}}>
                            {markers.map((element,index) => 
                            <Row>
                                <div class="column-left" sm="5">
                                    <time datetime="2014-09-20" class="icon">
                                        <em>{convertTime(element.date).dow}</em>
                                        <strong>{convertTime(element.date).month}</strong>
                                        <span>{convertTime(element.date).day}</span>
                                    </time>
                                </div>
                                <div class="column-right" sm="7">
                                    <ListGroupItem onClick={() => this.onMarkerClick(element,index)}>{element.title}</ListGroupItem>
                                </div>
                            </Row>
                            )}
                        </ListGroup>
                    </Col>
                </Row>
            </Container>

            <Collapse isOpen={this.state.eventInfoToggle}>
                <Alert color="info" style={{margin:'2% 5% 2% 5%'}}>
                    <h4>{markers[this.state.info].title}</h4>
                    <h6>When:</h6> <p>{markers[this.state.info].date} {markers[this.state.info].time}</p>
                    <h6>Where:</h6> {markers[this.state.info].location}
                    <div><a href='/event'>More details</a></div>
                </Alert>
            </Collapse>
            </div>
        );
    }
}