import React, { Component } from "react";
import PropTypes from "prop-types";
import api from "../utils/api";
import ArtistPreview from "./ArtistPreview";

class ArtistInput extends Component {
  constructor(props) {
    super(props);

    this.state = {
      artistName: ""
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChange(e) {
    const value = e.target.value;

    this.setState({ artistName: value });
  }

  handleSubmit(event) {
    event.preventDefault();

    this.props.onSubmit(this.state.artistName);
  }

  render() {
    return (
      <form className="column" onSubmit={this.handleSubmit}>
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
      artistImage: null,
      artistLink: null
    };

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(artistName) {
    artistName.toLowerCase();
    artistName.replace(/ /g, "%20");
    this.setState({ artistName });
    return api.fetchArtistInfo(artistName).then(res => {
      console.log(res);
      return this.setState({
        artistName,
        artistImage: res.images[0].url,
        artistLink: res.external_urls.spotify
      });
    });
  }

  render() {
    const artistImage = this.state.artistImage;
    const artistName = this.state.artistName;
    const artistLink = this.state.artistLink;
    return (
      <div>
        <div className="row">
          {!this.state.artistName &&
            <ArtistInput onSubmit={this.handleSubmit} />}

          {artistImage !== null &&
            <ArtistPreview
              artistImage={this.state.artistImage}
              artistName={this.state.artistName}
              link={artistLink}
            />}
        </div>
      </div>
    );
  }
}

export default Search;
