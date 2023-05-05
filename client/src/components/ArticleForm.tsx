import React, { useState } from 'react';
import axios from 'axios';
import { useHistory } from 'react-router-dom';
import { Article } from '../types/article';

const ArticleForm = () => {
  const [article, setArticle] = useState<Article>({
    title: '',
    content: '',
  });
  const history = useHistory();

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    await axios.post('http://localhost:3000/articles', article);
    history.push('/');
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
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
          <label htmlFor="content">Content</label>
          <textarea name="content" value={article.content} onChange={handleChange} />
        </div>
        <button type="submit">Save</button>
      </form>
    </div>
  );
};

export default ArticleForm;