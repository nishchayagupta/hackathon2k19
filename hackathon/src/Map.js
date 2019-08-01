import React, { Component } from 'react';
import { Map, GoogleApiWrapper, Marker, InfoWindow } from 'google-maps-react';

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
           lat: this.props.lat,
           lng: this.props.lng
          }}
          center={{
              lat: this.props.lat,
              lng: this.props.lng
          }}
        >{this.props.markers.map(marker => (
            <Marker
              {...marker}
            />
          ))}
          </Map>
      );
    }
  }
  
  export default GoogleApiWrapper({
    apiKey: 'AIzaSyC4XNIzf-qiwUJAed_j51Ssw8jlqaYhDwc'
  })(MapContainer);