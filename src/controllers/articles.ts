import { Request, Response } from 'express';
import { Pool } from 'pg';
import { Article } from '../types/article';

export const getArticles = (pool: Pool) => async (req: Request, res: Response) => {
  const client = await pool.connect();
  try {
    const result = await client.query<Article>('SELECT * FROM articles ORDER BY created_at DESC');
    res.json(result.rows);
  } finally {
    client.release();
  }
};

export const createArticle = (pool: Pool) => async (req: Request, res: Response) => {
  const client = await pool.connect();
  try {
    const { title, content } = req.body as Article;
    const result = await client.query<Article>('INSERT INTO articles (title, content) VALUES ($1, $2) RETURNING *', [
      title,
      content,
    ]);
    res.json(result.rows[0]);
  } finally {
    client.release();
  }
};