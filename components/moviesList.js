/** @format */

function updateMoviesList(movies) {
  let moviesListContainer = document.getElementsByClassName(
    "articles-list-container"
  )[0];

  let moviesArticles = constructArticleList(movies);

  moviesListContainer.replaceChildren(...moviesArticles);
}
