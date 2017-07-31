import React, { Component } from "react";
import { Link } from "react-router-dom";

class Home extends Component {
  render() {
    return (
      <div className="home-container">
        <h1>A music exploration app by Morgan Pierson</h1>

        <Link className="button" to="/search">
          Search
        </Link>
      </div>
    );
  }
}

export default Home;
