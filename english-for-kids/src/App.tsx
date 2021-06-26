import React from 'react';
import Header from './components/header/Header';
import CategoriesPage from './components/categories-page/categories-page';
import cardCategories from './categories';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

function App() {

  return (
    <Router>
      <div className="app">
      <Header></Header>
      <CategoriesPage categories={cardCategories}></CategoriesPage>
      </div>
    </Router>
  );
}

export default App;
