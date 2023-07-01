/** @format */
function updateArticleList() {
  if (route.currentPage.includes("search-term")) {
    getSearchedElements();
  } else {
    getPopularArticles();
  }
}

function next() {
  if (canGetNext()) {
    incrementCurrentPage();
    updateArticleList();
  }
}

function back() {
  if (canGetBack()) {
    decrementCurrentPage();
    updateArticleList();
  }
}

function getButton(button) {
  return document.getElementById(`${button}`);
}

function disableNextButton() {
  getButton("nextButton").setAttribute("disable", "true");
}
function enableNextButton() {
  getButton("nextButton").setAttribute("disable", "false");
}

function disableBackButton() {
  getButton("backButton").setAttribute("disable", "true");
}
function enableBackButton() {
  getButton("backButton").setAttribute("disable", "false");
}
