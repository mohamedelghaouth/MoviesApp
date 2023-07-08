/** @format */
import { updateMoviesList } from "../components/moviesList.js";
import { updateSeriesList } from "../components/seriesList.js";
import { setTotalPage } from "../Stores/stores.js";
import getOptions from "./conf.js";
import { selectedType, MOVIES, current_page } from "../Stores/stores.js";

function getSearchArticlesLink(name) {
  if (selectedType == undefined || selectedType == MOVIES) {
    return `https://api.themoviedb.org/3/search/movie?query=${name}&include_adult=false&language=en-US&page=${current_page}`;
  }

  return `https://api.themoviedb.org/3/search/tv?query=${name}&include_adult=false&language=en-US&page=${current_page}`;
}

function updateList(data) {
  if (selectedType == undefined || selectedType == MOVIES) {
    updateMoviesList(data);
  }
  updateSeriesList(data);
}

export function searchForArticles(name) {
  fetch(getSearchArticlesLink(name), getOptions)
    .then((response) => response.json())
    .then((data) => {
      setTotalPage(data.total_pages);
      updateList(data.results);
    })
    .catch((err) => console.error(err));
}
