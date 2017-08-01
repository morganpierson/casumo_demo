import React, { Component } from "react";
import PropTypes from "prop-types";
import Loading from "./Loading";
import api from "../utils/api";

const SelectedGenre = props => {
  const favorites = ["Artists", "Tracks"];
  return (
    <ul className="genres">
      {favorites.map(genre => {
        return (
          <li
            key={genre}
            style={genre === props.selectedGenre ? { color: "#d0021b" } : null}
            onClick={props.onSelect.bind(null, genre)}
          >
            {genre}
          </li>
        );
      })}
    </ul>
  );
};

const FavoriteGrid = props => {
  return (
    <ul className="favorite-list">
      {props.favorites.items.map((fav, index) => {
        return (
          <li key={fav.id} className="favorite-item">
            <ul className="space-list-items">
              <li>
                <img
                  className="favorite-pic"
                  src={
                    fav.type === "artist"
                      ? fav.images[0].url
                      : fav.album.images[0].url
                  }
                  alt={`Pic for ${fav.name}`}
                />
              </li>
              <li>
                <a href={fav.external_urls.spotify}>
                  {fav.name}
                </a>
              </li>
              {fav.type === "artist" &&
                <li>
                  {fav.followers.total} followers
                </li>}
            </ul>
          </li>
        );
      })}
    </ul>
  );
};

FavoriteGrid.propTypes = {
  favorites: PropTypes.object.isRequired
};

SelectedGenre.propTypes = {
  selectedGenre: PropTypes.string.isRequired,
  onSelect: PropTypes.func.isRequired
};

class Trending extends Component {
  constructor(props) {
    super(props);

    this.state = {
      selectedGenre: "Artists",
      favorites: null
    };

    this.updateGenre = this.updateGenre.bind(this);
  }

  componentDidMount() {
    this.updateGenre(this.state.selectedGenre);
  }

  updateGenre(genre) {
    this.setState({ selectedGenre: genre, favorites: null });
    api.fetchFavorite(genre.toLowerCase()).then(favorites => {
      return this.setState({ favorites });
    });
  }

  render() {
    return (
      <div>
        <SelectedGenre
          selectedGenre={this.state.selectedGenre}
          onSelect={this.updateGenre}
        />
        {!this.state.favorites
          ? <Loading />
          : <FavoriteGrid favorites={this.state.favorites} />}
      </div>
    );
  }
}

export default Trending;
