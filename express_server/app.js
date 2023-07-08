/** @format */

import express from "express";
import cors from "cors";

import { getLink } from "./fetchHelper.js";
import { getOptions, corsConfig } from "./conf.js";

const app = express();

app.use(cors(corsConfig));

app.get("/*", (req, res) => {
  //console.log(req);
  fetch(getLink(req.originalUrl), getOptions)
    .then((response) => response.json())
    .then((data) => {
      res.send(data);
    })
    .catch((err) => console.error(err));
});

app.listen(3000);
