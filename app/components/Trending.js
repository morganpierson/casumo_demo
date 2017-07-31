import React, { Component } from "react";

class Trending extends Component {
  render() {
    const genres = ["All", "Rock", "Hip-Hop", "R&B", "EDM"];

    return (
      <ul className="genres">
        {genres.map(genre => {
          return (
            <li>
              {genre}
            </li>
          );
        })}
      </ul>
    );
  }
}

export default Trending;
