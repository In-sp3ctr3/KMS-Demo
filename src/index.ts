import express from 'express';
import { json } from 'body-parser';
import { createPool } from 'pg';
import { getArticles, createArticle } from './controllers/articles';

const pool = createPool({
  connectionString: process.env.DATABASE_URL,
});

const app = express();

app.use(json());

app.get('/articles', getArticles(pool));
app.post('/articles', createArticle(pool));

app.listen(3000, () => {
  console.log('Server is listening on port 3000!');
});