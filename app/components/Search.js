import React, { Component } from "react";
import PropTypes from "prop-types";
import api from "../utils/api";

class ArtistInput extends Component {
  constructor(props) {
    super(props);

    this.state = {
      artistName: ""
    };
  }
  render() {
    return (
      <form action="" className="column">
        <label htmlFor="artistName" className="header">
          Search for Artists
        </label>
        <input
          id="artistName"
          placeholder="Search for a band or artist"
          type="text"
          autoComplete="off"
          value={this.state.artistName}
          onChange={this.handleChange}
        />
        <button
          type="submit"
          className="button"
          disabled={!this.state.artistName}
        >
          Search
        </button>
      </form>
    );
  }
}

ArtistInput.propTypes = {
  onSubmit: PropTypes.func.isRequired
};

class Search extends Component {
  constructor(props) {
    super(props);

    this.state = {
      artistName: "",
      artistImage: null
    };

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(artistName) {
    artistName.replace(/ /g, "%20");
    return api.fetchArtistInfo(artistName).then(res => {
      return this.setState({
        artistName,
        artistImage: res.artists.images[0].url
      });
    });
  }

  render() {
    return (
      <div>
        <div className="row">
          {!this.state.artistName &&
            <ArtistInput onSubmit={this.handleSubmit} />}
        </div>
      </div>
    );
  }
}

export default Search;
