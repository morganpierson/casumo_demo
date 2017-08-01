const axios = require("axios");

const id = "62ab4abbe2b8423995d2129aa7a97695";
const secret = "17f58881c83643348ff45e6eda1890e8";
const accessToken =
  "BQCAd6H69tWNp8AxgD5zEPTSg2XV6GrIuVjd8j3qsOhzFAsUa-hP7qFz_tBwU_tsxyedKY5-jb0pk_5tanQg256dvi8-Tx3qjrdV9G_JAX-kX0CJx39TW7wHQHYngmviNf7a1zWcfe3CqSP8yaXIdxTwcz2Bzfl_x5DYyT4SPZ8";

const myOptions = {
  method: "GET",
  headers: {
    Authorization: "Bearer " + accessToken
  },
  mode: "cors",
  cache: "default"
};

module.exports = {
  fetchArtistInfo: artist => {
    const BASE_URL = "https://api.spotify.com/v1/search?";
    const FETCH_URL = `${BASE_URL}q=${artist}&type=artist&limit=1`;

    return fetch(FETCH_URL, myOptions)
      .then(response => response.json())
      .then(json => {
        console.log(json);
        const artist = json.artists.items[0];

        return artist;
      });
  },

  fetchFavorite: type => {
    const BASE_URL = `https://api.spotify.com/v1/me/top/${type}`;
    //const FETCH_URL = `${BASE_URL}q=${artist}&type=artist&limit=1`;
    return fetch(BASE_URL, myOptions)
      .then(response => response.json())
      .then(json => {
        console.log(json);
        return json;
        //const artist = json.artists.items[0];

        //return artist;
      });
  }
};
