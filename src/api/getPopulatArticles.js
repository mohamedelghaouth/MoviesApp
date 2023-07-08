/** @format */
import { setTotalPage } from "../Stores/stores.js";
import getOptions from "./conf.js";
import {
  setLastRequest,
  selectedType,
  current_page,
  MOVIES,
  POPULAR_REQUEST,
} from "../Stores/stores.js";
import { updateMoviesList } from "../components/moviesList.js";
import { updateSeriesList } from "../components/seriesList.js";
import { SERVER_PATH } from "../../env.js";

function getUpdateArticlesLink() {
  if (selectedType == undefined || selectedType == MOVIES) {
    return `${SERVER_PATH}discover/movie?include_adult=false&include_video=false&language=en-US&page=${current_page}&sort_by=popularity.desc`;
  }

  return `${SERVER_PATH}tv/popular?language=en-US&page=${current_page}`;
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
      setLastRequest(POPULAR_REQUEST);
      updateArticles(data.results);
    })
    .catch((err) => console.error(err));
}
