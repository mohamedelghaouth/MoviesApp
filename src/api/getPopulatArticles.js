/** @format */
import { setTotalPage } from "../Stores/stores.js";
import getOptions from "./conf.js";
import { selectedType, current_page, MOVIES } from "../Stores/stores.js";
import { updateMoviesList } from "../components/moviesList.js";
import { updateSeriesList } from "../components/seriesList.js";

function getUpdateArticlesLink() {
  if (selectedType == undefined || selectedType == MOVIES) {
    return `https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=${current_page}&sort_by=popularity.desc`;
  }

  return `https://api.themoviedb.org/3/tv/popular?language=en-US&page=${current_page}`;
}

function updateArticles(data) {
  if (selectedType == MOVIES) {
    updateMoviesList(data);
  } else {
    updateSeriesList(data);
  }
}

export function getPopularArticles() {
  fetch(getUpdateArticlesLink(), getOptions)
    .then((response) => response.json())
    .then((data) => {
      setTotalPage(data.total_pages);
      updateArticles(data.results);
    })
    .catch((err) => console.error(err));
}
