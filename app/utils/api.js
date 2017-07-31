const axios = require("axios");

const id = "62ab4abbe2b8423995d2129aa7a97695";
const secret = "17f58881c83643348ff45e6eda1890e8";
const accessToken =
  "BQCnpdMVYBiDMt8_McuIL0ZXXqSyyoQ3ZtsBI_5qPtSaesFqvCm-q2B-FYAcVmeZcbF--QOzmQHogc4ftoevQqFuaTukdNEt6X1xnltQ4sgxanr3QsYy_5VdxnpqC7hOUZ_9nb1J8p-SAq4pZ4CpXCSwl3FQn3iSZXswBoQtgg0";

module.exports = {
  fetchArtistInfo: artist => {
    const BASE_URL = "https://api.spotify.com/v1/search?";
    const FETCH_URL = `${BASE_URL}q=${artist}&type=artist&limit=1`;

    const myOptions = {
      method: "GET",
      headers: {
        Authorization: "Bearer " + accessToken
      },
      mode: "cors",
      cache: "default"
    };

    fetch(FETCH_URL, myOptions).then(response => response.json()).then(json => {
      console.log(json);
      const artist = json.artists.items[0];

      return artist;
    });
  },

  fetchTopArtists: () => {
    const BASE_URL = "https://api.spotify.com/v1/me/top/artists";
    //const FETCH_URL = `${BASE_URL}q=${artist}&type=artist&limit=1`;

    const myOptions = {
      method: "GET",
      headers: {
        Authorization: "Bearer " + accessToken
      },
      mode: "cors",
      cache: "default"
    };

    fetch(BASE_URL, myOptions).then(response => response.json()).then(json => {
      console.log(json);
      //const artist = json.artists.items[0];

      //return artist;
    });
  },

  fetchTopTracks: () => {
    const BASE_URL = "https://api.spotify.com/v1/me/top/tracks";
    //const FETCH_URL = `${BASE_URL}q=${artist}&type=artist&limit=1`;

    const myOptions = {
      method: "GET",
      headers: {
        Authorization: "Bearer " + accessToken
      },
      mode: "cors",
      cache: "default"
    };

    fetch(BASE_URL, myOptions).then(response => response.json()).then(json => {
      console.log(json);
      //const artist = json.artists.items[0];

      //return artist;
    });
  }
};
