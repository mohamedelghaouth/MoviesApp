/** @format */
import { updateMoviesList } from "../components/moviesList.js";
import { updateSeriesList } from "../components/seriesList.js";
import { setTotalPage } from "../Stores/stores.js";
import getOptions from "./conf.js";
import {
  setLastRequest,
  selectedType,
  MOVIES,
  SEARCH_REQUEST,
  current_page,
} from "../Stores/stores.js";
import { SERVER_PATH } from "../../env.js";

function getSearchArticlesLink(name) {
  if (selectedType == undefined || selectedType == MOVIES) {
    return `${SERVER_PATH}search/movie?query=${name}&include_adult=false&language=en-US&page=${current_page}`;
  }

  return `${SERVER_PATH}search/tv?query=${name}&include_adult=false&language=en-US&page=${current_page}`;
}

function updateList(data) {
  if (selectedType == undefined || selectedType == MOVIES) {
    updateMoviesList(data);
  }
  updateSeriesList(data);
}

function updateTitle() {
  let searchInput = document.getElementById("articles-list-title");
  searchInput.innerText = `Popular Result`;
}

export function searchForArticles(name) {
  fetch(getSearchArticlesLink(name), getOptions)
    .then((response) => response.json())
    .then((data) => {
      setTotalPage(data.total_pages);
      setLastRequest(SEARCH_REQUEST);
      updateTitle();
      updateList(data.results);
    })
    .catch((err) => console.error(err));
}
