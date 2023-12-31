import express, { json } from "express";
import router from "./router/index-router";
import cors from "cors";

const app = express();

app.use(cors());
app.use(json());
app.use(router);

app.listen(5005, () => {
  console.log("Server is up and running")
})