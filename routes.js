/** @format */

const route = {
  currentPage: window.location.pathname,
};

function setPathName() {
  route.currentPage = window.location.pathname;
}

function init() {
  switch (route.currentPage) {
    case "":
    case "/":
    case "/MoviesApp":
    case "/index.html":
      // getNowPlayingArticles();
      getPopularArticles();
      let type = window.location.search.split("?type=")[1];
      if (type == undefined || type == MOVIES) {
        selectMovies();
      } else {
        selectSeries();
      }
      setPathName();
      break;
    case "/pages/details.html":
      let params = window.location.search.split("?");
      selectedType = params[1].split("=")[1];
      let id = params[2].split("=")[1];
      getArticleDetails(id);
      setPathName();
      break;
    default:
      break;
  }
}
