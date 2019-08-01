import React, { Component } from 'react';
import { Map, GoogleApiWrapper } from 'google-maps-react';

const mapStyles = {
  };
  

export class MapContainer extends Component {
    render() {
      return (
        <Map
          google={this.props.google}
          zoom={14}
          style={mapStyles}
          initialCenter={{
           lat: 43.040083,
           lng: -87.900278
          }}
        />
      );
    }
  }
  
  export default GoogleApiWrapper({
    apiKey: 'AIzaSyAVHNtpeS-cZYwGaV1ZRg68ypJymJ4UgCI'
  })(MapContainer);