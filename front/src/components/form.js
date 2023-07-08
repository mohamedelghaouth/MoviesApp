/** @format */
import { searchForArticles } from "../api/search.js";
import { getLastSearchedText } from "../Stores/stores.js";

export function searchedTextNotEmpty() {
  return getSearchedText().length != 0;
}

function getSearchedText() {
  let value = document.getElementById("searchInput").value;
  let textToSearch = value.trim().replaceAll(" ", "%20");
  return textToSearch;
}

export function getSearchedElement(e) {
  e.preventDefault();
  getSearchedElements();
}

export function getSearchedElements() {
  let searchedText = getSearchedText();
  if (searchedText.length != 0) {
    searchForArticles(searchedText);
  }
}
