import { Request, Response } from "express";
import { ArticleUseCases } from "../../usecases/article";

export const getArticleByIdHandler = async (
  req: Request,
  res: Response
): Promise<void> => {
  const id = Number(req.params.id);
  try {
    const articleUseCases = new ArticleUseCases();
    const article = await articleUseCases.getArticleById(id);
    if (!article) {
      res.status(404).send(`Article with id ${id} not found`);
      return;
    }
    res.json(article);
  } catch (error) {
    console.error(error);
    res.status(500).send(`Error getting article with id ${id}`);
  }
};