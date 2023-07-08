/** @format */

import { init } from "./routes.js";
import { getSearchedElement } from "./components/form.js";
import { selectMovies, selectSeries } from "./components/selectedType.js";
import { back, next } from "./components/pagination.js";

document.addEventListener("DOMContentLoaded", init());

document.getElementById("searchForm") &&
  document
    .getElementById("searchForm")
    .addEventListener("submit", getSearchedElement);

document.getElementById("moviesButton") &&
  document
    .getElementById("moviesButton")
    .addEventListener("click", selectMovies);

document.getElementById("seriesButton") &&
  document
    .getElementById("seriesButton")
    .addEventListener("click", selectSeries);

document.getElementById("backButton") &&
  document.getElementById("backButton").addEventListener("click", back);

document.getElementById("nextButton") &&
  document.getElementById("nextButton").addEventListener("click", next);
