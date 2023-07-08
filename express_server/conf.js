/** @format */
import { SECRET_TOKEN } from "./secure.js";

export const getOptions = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization: SECRET_TOKEN,
  },
};

export const corsConfig = {
  method: "http://127.0.0.1:5500/",
  optionsSuccessStatus: 200,
};
