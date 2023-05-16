import React, { useState, ChangeEvent, FormEvent } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { Article } from '../../../src/entities';

const ArticleForm = () => {
  const [article, setArticle] = useState<Article>({
    title: '',
    content: '',
  });
  const navigate = useNavigate();

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    await axios.post<Article>('http://localhost:3000/articles', article);
    navigate('/');
  };

  const handleChange = (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = event.target;
    setArticle((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  return (
    <div>
      <h1>Create article</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="title">Title</label>
          <input type="text" name="title" value={article.title} onChange={handleChange} />
        </div>
        <div>
          <label htmlFor="body">Content</label>
          <textarea name="body" value={article.content} onChange={handleChange} />
        </div>
        <button type="submit">Save</button>
      </form>
    </div>
  );
};

export default ArticleForm;