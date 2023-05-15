import { Request, Response } from "express";
import { ArticleUseCases } from "../../usecases/article";

export const getArticlesHandler = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const articleUseCases = new ArticleUseCases();
    const articles = await articleUseCases.getArticles();
    res.json(articles);
  } catch (error) {
    console.error(error);
    res.status(500).send("Error getting articles");
  }
};