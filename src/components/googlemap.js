import { Map, GoogleApiWrapper, Marker } from 'google-maps-react';
import React from "react";

class googlemap extends React.Component{
    render() {
        const mapStyles = {
            width: '400px',
            height: '400px',
        };

        return (
            <Map
              google={this.props.google}
              zoom={8}
              style={mapStyles}
              initialCenter={{ lat: 47.444, lng: -122.176}}
            >
              <Marker position={{ lat: 48.00, lng: -122.00}} />
            </Map>
        );
      }
}

export default GoogleApiWrapper({
    apiKey: 'AIzaSyA2519oArTZ8qkWOpx0nins2bIFQWc9yHA'
  })(googlemap);