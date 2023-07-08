/** @format */

import {
  enableNextButton,
  disableBackButton,
  disableNextButton,
  enableBackButton,
} from "../components/pagination.js";

export const MOVIES = "movie";
export const SERIES = "series";

export const SEARCH_REQUEST = "search";
export const POPULAR_REQUEST = "popular";

export let lastRequest;

export let lastSearchedText;

export let selectedType;

export let article_details;

export let current_page = 1;
export let total_page = 1;

export function setSelectedType(type) {
  selectedType = type;
}

export function setTotalPage(ttlPage) {
  total_page = ttlPage;
}

export function setCurrentPage(currentPage) {
  current_page = currentPage;
}

export function incrementCurrentPage() {
  setCurrentPage(current_page + 1);
  if (current_page == total_page) {
    disableNextButton();
  }
  if (current_page > 1) {
    enableBackButton();
  }
}

export function decrementCurrentPage() {
  setCurrentPage(current_page - 1);
  if (current_page <= 1) {
    disableBackButton();
  }
  if (current_page < total_page) {
    enableNextButton();
  }
}

export function updatePaginationInfo(ttlPage, currentPage) {
  setTotalPage(ttlPage);
  setCurrentPage(currentPage);
}

export function canGetNext() {
  return current_page < total_page;
}

export function canGetBack() {
  return current_page > 1;
}

export function setLastRequest(_lastRequest) {
  lastRequest = _lastRequest;
}

export function getLastRequest() {
  return lastRequest;
}

export function getLastSearchedText() {
  return lastSearchedText;
}
