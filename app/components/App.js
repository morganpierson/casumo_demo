import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "./Home";
import Nav from "./Nav";
import Trending from "./Trending";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="container">
          <Nav />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/trending" component={Trending} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
