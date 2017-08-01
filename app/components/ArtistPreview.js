import React from "react";
import PropTypes from "prop-types";

const ArtistPreview = props => {
  return (
    <div>
      <div className="column">
        <img
          src={props.artistImage}
          alt={`Image for ${props.artistName}`}
          id="artistImage"
        />
        <h2 className="artistName">
          {props.artistName}
        </h2>
      </div>
    </div>
  );
};

ArtistPreview.propTypes = {
  artistImage: PropTypes.string.isRequired,
  artistName: PropTypes.string.isRequired
};

export default ArtistPreview;
