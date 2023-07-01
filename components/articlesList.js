/** @format */

function constructArticleDate(article) {
  function getReleaseDate() {
    if (selectedType == MOVIES) {
      return article.release_date;
    }
    return article.first_air_date;
  }

  let p = document.createElement("p");
  p.innerHTML = getReleaseDate();

  return p;
}

function constructArticleTitle(article) {
  function getTitle() {
    if (selectedType == MOVIES) {
      return article.title;
    }
    return article.name;
  }

  let h4 = document.createElement("h4");
  h4.innerHTML = getTitle();

  return h4;
}

function constructArticleSubDiv(article) {
  let div = document.createElement("div");
  div.appendChild(constructArticleTitle(article));
  div.appendChild(constructArticleDate(article));

  return div;
}

function constructArticleImage(article) {
  let image_url = article.poster_path
    ? `https://image.tmdb.org/t/p/w500/${article.poster_path}`
    : "./images/no-image.jpg";

  let image = document.createElement("img");
  image.setAttribute("src", image_url);
  image.setAttribute("alt", "Flix no image");

  return image;
}

function constructArticleLink(article) {
  let link = document.createElement("a");
  link.setAttribute(
    "href",
    `/pages/details.html?type=${selectedType}?id=${article.id}`
  );
  link.classList.add("article-link");

  link.appendChild(constructArticleImage(article));

  return link;
}

function constructArticleList(articles) {
  return articles.map((article) => {
    let domArticle = document.createElement("article");
    domArticle.appendChild(constructArticleLink(article));
    domArticle.appendChild(constructArticleSubDiv(article));
    return domArticle;
  });
}
