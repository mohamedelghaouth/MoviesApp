/** @format */
import { searchForArticles } from "../api/search.js";

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
