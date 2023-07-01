/** @format */

const MOVIES = "movie";
const SERIES = "series";

let selectedType;

let article_details;

let current_page = 1;
let total_page = 1;

function setTotalPage(ttlPage) {
  total_page = ttlPage;
}

function setCurrentPage(currentPage) {
  current_page = currentPage;
}

function incrementCurrentPage() {
  setCurrentPage(current_page + 1);
  if (current_page == total_page) {
    disableNextButton();
  }
  if (current_page > 1) {
    enableBackButton();
  }
}

function decrementCurrentPage() {
  setCurrentPage(current_page - 1);
  if (current_page <= 1) {
    disableBackButton();
  }
  if (current_page < total_page) {
    enableNextButton();
  }
}

function updatePaginationInfo(ttlPage, currentPage) {
  setTotalPage(ttlPage);
  setCurrentPage(currentPage);
}

function canGetNext() {
  return current_page < total_page;
}

function canGetBack() {
  return current_page > 1;
}
