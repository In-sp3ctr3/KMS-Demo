import { Article } from "./Article";

export interface ArticleRepositoryInterface {
  getAllArticles(): Promise<Article[]>;
  getArticleById(id: number): Promise<Article | null>;
  createArticle(data: Article): Promise<Article>;
}