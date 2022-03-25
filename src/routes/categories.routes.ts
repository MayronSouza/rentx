import { Router } from "express";
import { v4 as uuidV4 } from "uuid";

export const categoryRouter = Router();

const categories = [];

categoryRouter.get("/", (request, response) => response.json(categories));

categoryRouter.post("/", (request, response) => {
  const { name, description } = request.body;

  const category = {
    id: uuidV4(),
    name,
    description,
  };

  categories.push(category);

  return response.status(201).json();
});
