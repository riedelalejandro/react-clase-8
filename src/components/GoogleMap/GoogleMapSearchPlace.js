import React, {Component} from 'react'
import PropTypes from 'prop-types'

const google = window.google;

class GoogleMapSearchPlace extends Component {
  autocomplete = null;

  componentDidMount() {
    const { onSelectPlace } = this.props

    this.autocomplete = new google.maps.places.Autocomplete(document.getElementById('pac-input'));

    this.autocomplete.addListener('place_changed', () => {
      const place = this.autocomplete.getPlace();
      if (place.geometry) {
        //Ejecuto el callback pasado por parámetro
        onSelectPlace({
          name: place.name,
          lat: place.geometry.location.lat(),
          lng: place.geometry.location.lng(),
          address: place.formatted_address
        })
      }
    });
  }

  render() {
    return <input id="pac-input" type="text" placeholder="Enter a location"/>
  }
}

GoogleMapSearchPlace.propTypes = {
  onSelectPlace: PropTypes.func.isRequired,
};

export default GoogleMapSearchPlace
