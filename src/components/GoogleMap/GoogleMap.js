import React, {Component} from 'react'
import PropTypes from 'prop-types'

const google = window.google;

class GoogleMap extends Component {
  map = null;
  marker = null;

  componentDidMount() {
    const { lat, lng } = this.props;

    this.map = new google.maps.Map(document.getElementById('map'), {
      zoom: 15,
    });

    this.buildMarker({ lat, lng });
  }

  buildMarker = () => {
    const { lat, lng } = this.props
    this.marker = new google.maps.Marker({
      position: { lat, lng },
      map: this.map
    });
    this.map.setCenter({ lat, lng });
  };

  componentDidUpdate() {
    const { lat, lng } = this.props;
    this.buildMarker({ lat, lng });
  }

  render() {
    return <div id="map" style={{ height: '400px', width: '100%' }}/>
  }
}

GoogleMap.propTypes = {
  lat: PropTypes.number.isRequired,
  lng: PropTypes.number.isRequired,
};

export default GoogleMap
