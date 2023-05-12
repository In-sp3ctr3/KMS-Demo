import React from 'react';
import { BrowserRouter as Router, Routes, Route, } from 'react-router-dom';
import ArticleList from './components/ArticleList.tsx';
import ArticleForm from './components/ArticleForm.tsx';
import ArticleDetails from './components/ArticleDetails.tsx';
//import SplashPage from './components/SplashPage';
import Header from './components/Header';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Header />} />
        <Route path="/articles" element={<ArticleList />} />
        <Route path="/articles/new" element={<ArticleForm />} />
        <Route path="/articles/:id" element={<ArticleDetails />} />
      </Routes>
    </Router>
  );
};

export default App;