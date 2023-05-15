import { pool } from "../config";
import { Article } from "../entities/article/Article";
import { ArticleRepositoryInterface } from "../entities/article/ArticleRespositoryInterface";

export class ArticleGateway implements ArticleRepositoryInterface {
  async getAllArticles(): Promise<Article[]> {
    const client = await pool.connect();
    try {
      const result = await client.query("SELECT * FROM article");
      return result.rows as Article[];
    } finally {
      client.release();
    }
  }

  async getArticleById(id: number): Promise<Article | null> {
    const client = await pool.connect();
    try {
      const result = await client.query("SELECT * FROM article WHERE id = $1", [
        id,
      ]);
      if (result.rows.length === 0) {
        return null;
      }
      return result.rows[0] as Article;
    } finally {
      client.release();
    }
  }

  async createArticle(data: Article): Promise<Article> {
    const client = await pool.connect();
    try {
      const result = await client.query(
        "INSERT INTO article (title, body) VALUES ($1, $2) RETURNING *",
        [data.title, data.content]
      );
      return result.rows[0] as Article;
    } finally {
      client.release();
    }
  }
}