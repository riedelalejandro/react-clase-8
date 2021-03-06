import React, { Component } from 'react'
import PropTypes from 'prop-types'
import GoogleMap, { GoogleMapSearchPlace } from '../GoogleMap'

class SearchPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      lat: -34.5488761,
      lng: -58.4437724,
      name: null,
      address: null,
    }
  }

  handleOnSelectPlace = ({ name, lat, lng, address }) => {
    this.setState({ name, lat, lng, address })
  };

  handleOnAddPlace = () => {
    const { lat, lng, name, address } = this.state;
    this.props.onAddPlace({ lat, lng, name, address })
  };

  render() {
    const { lat, lng, name, address } = this.state;

    return (
      <div>
        <h1>Buscador de Lugares</h1>
        <GoogleMapSearchPlace onSelectPlace={this.handleOnSelectPlace}/>
        <GoogleMap lat={lat} lng={lng} />
        { name && (
          <div>
            <h2>{name} <small>{address}</small> <button onClick={this.handleOnAddPlace}>Agregar a la lista</button></h2>
          </div>
        )}
      </div>
    )
  }
}

SearchPage.propTypes = {
  onAddPlace: PropTypes.func.isRequired,
};

export default SearchPage