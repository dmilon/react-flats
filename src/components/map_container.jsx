import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';

import Marker from "./marker";

class MapContainer extends Component {
  static defaultProps = {
    center: {
      lat: 48.884211,
      lng: 2.34689
    },
    zoom: 12
  };

  render () {
    const { center, zoom, selectedFlat } = this.props;
    return (
      <div className="map-container">
        <GoogleMapReact
          bootstrapURLKeys={{ key: "" }}
          defaultCenter={center}
          defaultZoom={zoom}
        >
          <Marker
            lat={selectedFlat.lat}
            lng={selectedFlat.lng}
          />
        </GoogleMapReact>
      </div>
    );
  }
}

export default MapContainer;
