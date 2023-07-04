/** @format */
import getOptions from "./conf.js";

function getNowPlayingLink() {
  if (selectedType == undefined || selectedType == MOVIES) {
    return `https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1`;
  }
  return `https://api.themoviedb.org/3/tv/on_the_air?language=en-US&page=1`;
}

function getNowPlayingArticles() {
  fetch(getNowPlayingLink(), getOptions)
    .then((response) => response.json())
    .then((data) => {
      updateSwiper(data.results);
    })
    .catch((err) => console.error(err));
}

export { getNowPlayingArticles };