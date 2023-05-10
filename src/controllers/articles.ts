import { Request, Response } from 'express';
import { Pool, PoolClient } from 'pg';
import { Article } from '../types/article';
import dotenv from 'dotenv';
dotenv.config();

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  max: 20, // maximum number of clients in the pool
  idleTimeoutMillis: 30000, // how long a client is allowed to remain idle before being closed
});

export const getArticles = async (req: Request, res: Response) => {
  let client: PoolClient;
  try {
    client = await pool.connect();
    const result = await client.query<Article>('SELECT * FROM article');
    res.json(result.rows);
  } catch (error) {
    console.error(error);
    res.status(500).send('Error getting articles');
  } finally {
    client && client.release();
  }
};

export const getArticleById = async (req: Request, res: Response) => {
  const id = req.params.id; // Assuming the id is passed as a parameter in the request URL
  let client: PoolClient;
  try {
    client = await pool.connect();
    const result = await client.query<Article>('SELECT * FROM article WHERE id = $1', [id]);
    res.json(result.rows[0]); // Assuming there is only one article with the given id
  } catch (error) {
    console.error(error);
    res.status(500).send('Error getting article by id');
  } finally {
    client && client.release();
  }
};

export const createArticle = async (req: Request, res: Response) => {
  let client: PoolClient;
  try {
    client = await pool.connect();
    const { title, body } = req.body as Article;
    const result = await client.query<Article>(
      'INSERT INTO article (title, body) VALUES ($1, $2) RETURNING *',
      [title, body]
    );
    res.json(result.rows[0]);
  } catch (error) {
    console.error(error);
    res.status(500).send('Error creating article');
  } finally {
    client && client.release();
  }
};