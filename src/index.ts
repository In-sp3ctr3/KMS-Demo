import express from 'express';
import { json } from 'body-parser';
import { Pool } from 'pg';
const cors = require('cors');
import { getArticles, createArticle, getArticleById } from './controllers/articles';
import dotenv from 'dotenv';
dotenv.config();

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  max: 20, // maximum number of clients in the pool
  idleTimeoutMillis: 30000, // how long a client is allowed to remain idle before being closed
});

const app = express();

app.use(json());

app.use(cors({ 
  origin: 'http://localhost:8000', 
  credentials: true,
  optionsSuccessStatus: 200,
  allowedHeaders: ['Content-Type', 'Authorization'],
  methods: ['GET', 'POST', 'PUT', 'DELETE'] 
}));

app.get('/articles', getArticles);
app.get('/articles/:id', getArticleById);
app.post('/articles', createArticle);

app.listen(3000, () => {
  console.log('Server is listening on port 3000!');
});