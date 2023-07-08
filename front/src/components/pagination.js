/** @format */
import { getSearchedElements } from "./form.js";
import { getPopularArticles } from "../api/getPopulatArticles.js";
import {
  incrementCurrentPage,
  decrementCurrentPage,
} from "../Stores/stores.js";

export function updateArticleList() {
  if (route.currentPage.includes("search-term")) {
    getSearchedElements();
  } else {
    getPopularArticles();
  }
}

export function next() {
  if (canGetNext()) {
    incrementCurrentPage();
    updateArticleList();
  }
}

export function back() {
  if (canGetBack()) {
    decrementCurrentPage();
    updateArticleList();
  }
}

export function getButton(button) {
  return document.getElementById(`${button}`);
}

export function disableNextButton() {
  getButton("nextButton").setAttribute("disable", "true");
}
export function enableNextButton() {
  getButton("nextButton").setAttribute("disable", "false");
}

export function disableBackButton() {
  getButton("backButton").setAttribute("disable", "true");
}
export function enableBackButton() {
  getButton("backButton").setAttribute("disable", "false");
}
