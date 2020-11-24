import React, { Component, useState } from "react";
import { useLocation, BrowserRouter, Link } from "react-router-dom";
import { Route, Switch } from "react-router-dom";
import "../styles/App.css";

class App extends Component {
  render() {
    return (
      <div id="main">
        <BrowserRouter>
          <LocationDisplay />
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Switch>
            <Route exact path="/about">
              <div>You are on about Page</div>
            </Route>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="*">
              <div>No match</div>
            </Route>
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

function Home() {
  return <div>You are home</div>;
}

function LocationDisplay() {
  const { pathname } = useLocation();
  return <div data-testid="location-display">{pathname}</div>;
}

export { LocationDisplay };
export default App;
