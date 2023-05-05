import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import ArticleList from './components/ArticleList';
import ArticleForm from './components/ArticleForm';
import ArticleDetails from './components/ArticleDetails';

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

        <Switch>
          <Route path="/" exact>
            <ArticleList />
          </Route>
          <Route path="/articles/new">
            <ArticleForm />
          </Route>
          <Route path="/articles/:id">
            <ArticleDetails />
          </Route>
        </Switch>
      </div>
    </Router>
  );
};

export default App;