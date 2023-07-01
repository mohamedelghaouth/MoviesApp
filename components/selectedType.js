/** @format */

function updateTitle() {
  let searchInput = document.getElementById("articles-list-title");
  searchInput.innerText = `Popular ${selectedType}`;
}

function updateInputPlaceHolder() {
  let searchInput = document.getElementById("searchInput");
  searchInput.setAttribute("placeholder", `search for ${selectedType}`);
}

function updateElement() {
  updateTitle();
  updateInputPlaceHolder();
}

function selectMovies() {
  let moviesButton = document.getElementById("moviesButton");
  let seriesButton = document.getElementById("seriesButton");

  moviesButton.classList.add("selected-btn");
  seriesButton.classList.remove("selected-btn");

  selectedType = MOVIES;
  updateElement();
  getPopularArticles();
}

function selectSeries() {
  let moviesButton = document.getElementById("moviesButton");
  let seriesButton = document.getElementById("seriesButton");

  moviesButton.classList.remove("selected-btn");
  seriesButton.classList.add("selected-btn");

  selectedType = SERIES;
  updateElement();
  getPopularArticles();
}
