/** @format */
import { getPopularArticles } from "../api/getPopulatArticles.js";
import { getNowPlayingArticles } from "../api/getPlayingNow.js";

import {
  selectedType,
  MOVIES,
  SERIES,
  setSelectedType,
} from "../Stores/stores.js";

function updateTitle() {
  let searchInput = document.getElementById("articles-list-title");
  searchInput.innerText = `Popular ${selectedType}`;
}

function updateInputPlaceHolder() {
  let searchInput = document.getElementById("searchInput");
  searchInput.value = "";
  searchInput.setAttribute("placeholder", `search for ${selectedType}`);
}

function updateElement() {
  updateTitle();
  updateInputPlaceHolder();
}

export function selectMovies() {
  let moviesButton = document.getElementById("moviesButton");
  let seriesButton = document.getElementById("seriesButton");

  moviesButton.classList.add("selected-btn");
  seriesButton.classList.remove("selected-btn");

  setSelectedType(MOVIES);
  updateElement();
  getNowPlayingArticles();
  getPopularArticles();
}

export function selectSeries() {
  let moviesButton = document.getElementById("moviesButton");
  let seriesButton = document.getElementById("seriesButton");

  moviesButton.classList.remove("selected-btn");
  seriesButton.classList.add("selected-btn");

  setSelectedType(SERIES);
  updateElement();
  getNowPlayingArticles();
  getPopularArticles();
}
