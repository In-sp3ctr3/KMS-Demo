import { Article } from "../../entities/article/Article";
import { ArticleGateway } from "../../gateways/ArticleGateway";
import { HttpError } from "../../errors/HttpError";
import { Logger } from "../../services/Logger";
import { ArticleRepositoryInterface } from "../../entities/article/ArticleRespositoryInterface";

export class ArticleUseCases {
  private articleRepository: ArticleRepositoryInterface;
  private logger: Logger;

  constructor(articleRepository?: ArticleRepositoryInterface, logger?: Logger) {
    this.articleRepository = articleRepository || new ArticleGateway();
    this.logger = logger || new Logger();
  }

  async getArticles(): Promise<Article[]> {
    try {
      const articles = await this.articleRepository.getAllArticles();
      return articles;
    } catch (error) {
      this.logger.error("Error getting articles", error);
      throw new HttpError(500, "Error getting articles");
    }
  }

  async getArticleById(id: number): Promise<Article | null> {
    try {
      const article = await this.articleRepository.getArticleById(id);
      return article;
    } catch (error) {
      this.logger.error(`Error getting article with id ${id}`, error);
      throw new HttpError(500, `Error getting article with id ${id}`);
    }
  }

  async createArticle(data: Article): Promise<Article> {
    try {
      const article = await this.articleRepository.createArticle(data);
      return article;
    } catch (error) {
      this.logger.error("Error creating article", error);
      throw new HttpError(500, "Error creating article");
    }
  }
}

class ArticleRepository implements ArticleRepositoryInterface {
  async getAllArticles(): Promise<Article[]> {
    throw new Error("Method not implemented.");
  }

  async getArticleById(id: number): Promise<Article | null> {
    throw new Error("Method not implemented.");
  }

  async createArticle(data: Article): Promise<Article> {
    throw new Error("Method not implemented.");
  }
}