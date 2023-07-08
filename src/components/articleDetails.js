/** @format */
import { SERIES, MOVIES, selectedType } from "../Stores/stores.js";

function getSecondTitle() {
  if (selectedType == MOVIES) {
    return "Movie";
  }
  return "TV Show";
}

function getProductCompanies(article) {
  let production_companies = article.production_companies.map(
    (cmp) => cmp.name
  );
  return production_companies.join("; ");
}

function constructSecondSection(article) {
  let detailSection = document.getElementsByClassName("second-section")[0];

  if (selectedType == undefined || selectedType == MOVIES) {
    detailSection.innerHTML = `
            <h4 id="info-title">${getSecondTitle()} Info</h4>
            <div>
            <ul>
                <li class="article-inf">
                    <span class="article-inf-name">Budget: </span> 
                    ${article.budget}
                </li>
                <li class="article-inf">
                    <span class="article-inf-name">Revenue: </span> 
                    ${article.revenue}
                </li>
                <li class="article-inf">
                    <span class="article-inf-name">Runtime: </span> 
                    ${article.runtime} min
                </li>
                <li class="article-inf">
                    <span class="article-inf-name">Status: </span> 
                    ${article.status}
                </li>
                <li class="article-inf">
                    <span class="article-inf-name">Product Companies: </span>
                    ${getProductCompanies(article)}
                </li>
            </ul>
            </div>
        `;
  } else {
    detailSection.innerHTML = `
            <h4 id="info-title">${getSecondTitle()} Info</h4>
            <div>
            <ul>
                <li class="article-inf">
                    <span class="article-inf-name">Number Of Seasons: </span>
                    ${article.number_of_seasons}
                </li>
                <li class="article-inf">
                    <span class="article-inf-name">Last Episode to Air: </span> 
                    ${article.last_episode_to_air.name}
                </li>
                <li class="article-inf">
                    <span class="article-inf-name">Status: </span> 
                    ${article.status}
                </li>
                <li class="article-inf">
                    <span class="article-inf-name">Product Companies: </span>
                    ${getProductCompanies(article)}
                </li>
            </ul>
            </div>
        `;
  }
}

function getTitle(article) {
  if (selectedType == MOVIES) {
    return article.title;
  }
  return article.name;
}

function getPosterPath(article) {
  return article.poster_path
    ? `https://image.tmdb.org/t/p/w500/${article.poster_path}`
    : "./images/no-image.jpg";
}

function getGenres(article) {
  let genres = article.genres.map((genre) => genre.name);
  return genres.join("<br/>");
}

function constructDetailsSection(article) {
  let detailSection = document.getElementsByClassName("details-section")[0];

  detailSection.innerHTML = `
        <article class="img-article container">
            <img src="${getPosterPath(article)}" alt="Flix no image" />
        </article>
        <article class="details-article container">
          <h4>${getTitle(article)}</h4>
          <ul>
            <li class="article-inf">
              ${article.vote_average}/10 with ${article.vote_count} vote
            </li>
            <li class="article-inf">
              ${article.overview}
            </li>
            <li class="article-inf">
              <b>Genres</b> <br/> ${getGenres(article)}
            </li>
          </ul>
        </article>
    `;
}

function constructBackButton() {
  let detailSection = document.getElementsByClassName("logo")[0];

  if (selectedType == undefined || selectedType == MOVIES) {
    detailSection.innerHTML = `
        <a href="../index.html?type=${MOVIES}">
        <button id="backButton" class="btn" onclick="">
            back to movies
        </button>
        </a>
    `;
  } else {
    detailSection.innerHTML = `
        <a href="/index.html?type=${SERIES}">
        <button id="backButton" class="btn" onclick="">
            back to series
        </button>
        </a>
    `;
  }
}

export function constructArticleDetails(article) {
  constructBackButton();
  constructDetailsSection(article);
  constructSecondSection(article);
}
