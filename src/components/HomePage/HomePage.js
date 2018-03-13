import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

const HomePage = ({places, onSelectPlace, onRemovePlace}) => (
  <div>
    <h1>Mis Lugares</h1>
    {!places.length ? (
        <p>No hay lugares cargados</p>
      ) :
      (
        <ul>
          {places.map(place => (
            <li key={place.name}>
              <Link to={`/places/${place.name}`}>{place.name}</Link> <button onClick={() => {onRemovePlace(place)}}>Quitar de la lista</button>
            </li>
          ))}
        </ul>
      )}
  </div>
);

HomePage.propTypes = {
  places: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string.isRequired,
    lat: PropTypes.number.isRequired,
    lng: PropTypes.number.isRequired,
    address: PropTypes.string.isRequired,
  })).isRequired,
};

export default HomePage