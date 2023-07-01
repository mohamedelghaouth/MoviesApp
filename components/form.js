/** @format */

function getSearchedElement() {}

function getSearchedText() {
  let value = document.getElementById("searchInput").value;
  let textToSearch = value.trim().replaceAll(" ", "%20");
  return textToSearch;
}

function getSearchedElement(e) {
  e.preventDefault();
  getSearchedElements();
}

function getSearchedElements() {
  let searchedText = getSearchedText();
  if (searchedText.length != 0) {
    searchForArticles(searchedText);
  }
}
