import express from "express";
import cors from "cors";

import routes from "./routes/routes.js";

import "dotenv/config";
export const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api/v1", routes);
