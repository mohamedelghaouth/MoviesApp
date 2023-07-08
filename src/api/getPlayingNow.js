/** @format */
import getOptions from "./conf.js";
import { SERVER_PATH } from "../../env.js";

function getNowPlayingLink() {
  if (selectedType == undefined || selectedType == MOVIES) {
    return `${SERVER_PATH}movie/now_playing?language=en-US&page=1`;
  }
  return `${SERVER_PATH}tv/on_the_air?language=en-US&page=1`;
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
