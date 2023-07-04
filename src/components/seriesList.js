/** @format */
import { constructArticleList } from "./articlesList.js";

export function updateSeriesList(series) {
  let seriesListContainer = document.getElementsByClassName(
    "articles-list-container"
  )[0];

  let seriesArticles = constructArticleList(series);

  seriesListContainer.replaceChildren(...seriesArticles);
}
