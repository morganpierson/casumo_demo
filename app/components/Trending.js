import React, { Component } from "react";
import PropTypes from "prop-types";

import api from "../utils/api";

const SelectedGenre = props => {
  const genres = ["All", "Rock", "Hip-Hop", "R&B", "EDM"];
  return (
    <ul className="genres">
      {genres.map(genre => {
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

SelectedGenre.propTypes = {
  selectedGenre: PropTypes.string.isRequired,
  onSelect: PropTypes.func.isRequired
};

class Trending extends Component {
  constructor(props) {
    super(props);

    this.state = {
      selectedGenre: "All"
    };

    this.updateGenre = this.updateGenre.bind(this);
  }

  updateGenre(genre) {
    this.setState({ selectedGenre: genre });
  }

  componentDidMount() {
    api.fetchArtistInfo();
  }

  render() {
    return (
      <div>
        <SelectedGenre
          selectedGenre={this.state.selectedGenre}
          onSelect={this.updateGenre}
        />
      </div>
    );
  }
}

export default Trending;
