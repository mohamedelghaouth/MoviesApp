/** @format */
import { constructArticleDetails } from "../components/articleDetails.js";
import getOptions from "./conf.js";
import { MOVIES, selectedType } from "../Stores/stores.js";
import { SERVER_PATH } from "../../env.js";

function getArticleDetailsLink(id) {
  if (selectedType == undefined || selectedType == MOVIES) {
    return `${SERVER_PATH}movie/${id}?language=en-US`;
  }
  return `${SERVER_PATH}tv/${id}?language=en-US`;
}

function getArticleDetails(id) {
  fetch(getArticleDetailsLink(id), getOptions)
    .then((response) => response.json())
    .then((data) => {
      constructArticleDetails(data);
    })
    .catch((err) => console.error(err));
}

export { getArticleDetails };
