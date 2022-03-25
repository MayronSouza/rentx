import express from "express";

import { categoryRouter } from "./routes/categories.routes";

const app = express();

app.use(express.json());
app.use("/categories", categoryRouter);

app.listen(3333, () => console.log("Server is running..."));
