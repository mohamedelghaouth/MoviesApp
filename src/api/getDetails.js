/** @format */
import { constructArticleDetails } from "../components/articleDetails.js";
import getOptions from "./conf.js";
import { MOVIES, selectedType } from "../Stores/stores.js";

function getArticleDetailsLink(id) {
  if (selectedType == undefined || selectedType == MOVIES) {
    return `https://api.themoviedb.org/3/movie/${id}?language=en-US`;
  }
  return `https://api.themoviedb.org/3/tv/${id}?language=en-US`;
}

function getArticleDetails(id) {
  fetch(getArticleDetailsLink(id), getOptions)
    .then((response) => response.json())
    .then((data) => {
      constructArticleDetails(data);
    })
    .catch((err) => console.error(err));
}

export { getArticleDetails };
