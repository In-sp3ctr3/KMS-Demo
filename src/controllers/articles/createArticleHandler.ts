import { Request, Response } from "express";
import { Article } from "../../entities/article/Article";
import { ArticleUseCases } from "../../usecases/article";

export const createArticleHandler = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const articleData = req.body as Article;
    const articleUseCases = new ArticleUseCases();
    const article = await articleUseCases.createArticle(articleData);
    res.json(article);
  } catch (error) {
    console.error(error);
    res.status(500).send("Error creating article");
  }
};