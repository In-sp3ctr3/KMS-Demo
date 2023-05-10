import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import ArticleList from './components/ArticleList.tsx';
import ArticleForm from './components/ArticleForm.tsx';
import ArticleDetails from './components/ArticleDetails.tsx';

const App = () => {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/articles/new">New Article</Link>
            </li>
          </ul>
        </nav>

        <Routes>
          <Route path="/" element={<ArticleList />} />
          <Route path="/articles/new" element={<ArticleForm />} />
          <Route path="/articles/:id" element={<ArticleDetails />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;