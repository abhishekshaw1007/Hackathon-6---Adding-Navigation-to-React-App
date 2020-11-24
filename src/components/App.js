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
          <Switch>
            <Route exact path="/about">
              <>
                <Link to="/">Home</Link>
                <Link to="/about">About</Link>
                <div>You are on about Page</div>
              </>
            </Route>
            <Route exact path="/">
              <>
                <Link to="/">Home</Link>
                <Link to="/about">About</Link>
                <Home />
              </>
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

export function LocationDisplay() {
  const { pathname } = useLocation();
  return <div data-testid="location-display">{pathname}</div>;
}

// export { LocationDisplay };
export default App;
