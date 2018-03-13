import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { withRouter, Route, Link, Switch, Redirect } from 'react-router-dom'
import AuthButton from './components/AuthButton'
import PrivateRoute from './components/PrivateRoute'
import HomePage from './components/HomePage'
import LoginPage from './components/LoginPage'
import SearchPage from './components/SearchPage'
import PlacePage from './components/PlacePage'

class App extends Component {
  constructor() {
    super();
    this.state = {
      isAuthenticated: false,
      places: []
    };
  }

  authenticate = () => {
    this.setState({ isAuthenticated: true });
  };

  signout = () => {
    const { history } = this.props;
    this.setState({ isAuthenticated: false });
    history.push("/");
  };

  handleOnAddPlace = ({ name, lat, lng, address }) => {
    const { places } = this.state;

    if (!places.find((place) => place.name === name)) {
      places.push({ name, lat, lng, address });

      this.setState({ places })
    }
  };

  handleOnRemovePlace = ({ name }) => {
    const { places } = this.state;
    const index = places.map(place => place.name).indexOf(name);
    if (index > -1) {
      places.splice(index, 1);
      this.setState({ places })
    }
  };

  render() {
    const { isAuthenticated, places } = this.state;

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Mis Lugares</h1>
          <AuthButton isAuthenticated={isAuthenticated} onSignedOut={this.signout} />
        </header>
        {isAuthenticated && (
          <ul>
            <li>
              <Link to="/places">Mis Lugares ({ places.length })</Link>
            </li>
            <li>
              <Link to="/search">Buscador</Link>
            </li>
          </ul>
        )}
        <Switch>
          <Route path="/login" component={(props) => <LoginPage authenticate={this.authenticate} isAuthenticated={isAuthenticated} {...props} />} />
          <Route exact path="/" component={(props) => <Redirect to="/places"/>} />
          <PrivateRoute isAuthenticated={isAuthenticated} path="/places/:name" component={(props) => <PlacePage places={places} onRemovePlace={this.handleOnRemovePlace} {...props} />} />
          <PrivateRoute isAuthenticated={isAuthenticated} path="/places" component={(props) => <HomePage places={places} onRemovePlace={this.handleOnRemovePlace} {...props}/>} />
          <PrivateRoute isAuthenticated={isAuthenticated} path="/search" component={(props) => <SearchPage onAddPlace={this.handleOnAddPlace} {...props} />} />
        </Switch>
      </div>
    );
  }
}

export default withRouter(App);
