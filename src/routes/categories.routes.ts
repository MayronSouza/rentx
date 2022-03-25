import { Router } from "express";

import { CategoriesRepository } from "../repositories/CategoriesRepository";

export const categoryRouter = Router();

const categoriesRepository = new CategoriesRepository();

categoryRouter.get("/", (request, response) => {
  const categories = categoriesRepository.findAll();

  response.json(categories);
});

categoryRouter.post("/", (request, response) => {
  const data = request.body;

  const category = categoriesRepository.create(data);

  return response.status(201).json(category);
});
