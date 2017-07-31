const axios = require("axios");

const id = "62ab4abbe2b8423995d2129aa7a97695";
const secret = "17f58881c83643348ff45e6eda1890e8";
const accessToken =
  "BQCEm7dvTvX-r8pvbhq7T9Mhm5rs2te7Lgwr-fFJpUpMQvDOuapdh-2eof8u4RujqkCszxwb_4m_ZaQpxyGHEke9ZNEQAaJ692QWdJZrq4JNnVyP8zILYNlpeoq8hzdAwDUhOfKBshu0XzWvqx8nCfLxDiaIFgFI53A";

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
  }
};
