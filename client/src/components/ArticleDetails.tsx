import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { Article } from '../types/article';

const ArticleDetails = () => {
  const { id } = useParams<{ id: string }>();
  const [article, setArticle] = useState<Article | null>(null);

  useEffect(() => {
    const fetchArticle = async () => {
      const result = await axios.get<Article>(`http://localhost:3000/articles/${id}`);
      setArticle(result.data);
    };
    fetchArticle();
  }, [id]);

  if (!article) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>{article.title}</h1>
      <p>{article.content}</p>
      <p>Created at: {new Date(article.created_at!).toLocaleString()}</p> </div> ); };

export default ArticleDetails;