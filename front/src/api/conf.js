/** @format */
import { SECRET_TOKEN } from "../secure.js";

const getOptions = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization: SECRET_TOKEN,
  },
};

export default getOptions;
