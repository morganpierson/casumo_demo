import React, { Component } from "react";

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

  render() {
    const genres = ["All", "Rock", "Hip-Hop", "R&B", "EDM"];

    return (
      <ul className="genres">
        {genres.map(genre => {
          return (
            <li
              key={genre}
              style={
                genre === this.state.selectedGenre ? { color: "#d0021b" } : null
              }
              onClick={this.updateGenre.bind(null, genre)}
            >
              {genre}
            </li>
          );
        })}
      </ul>
    );
  }
}

export default Trending;
