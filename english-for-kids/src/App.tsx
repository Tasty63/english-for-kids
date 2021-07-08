import { BrowserRouter as Router, Route } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import Header from './components/header/Header';
import CategoryList from './components/categories-list/categories-list';
import { initCategories } from './redux/actions';
import WordList from './components/word-list/word-list';
import Menu from './components/menu/menu';

const App: React.FC = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(initCategories());
  }, [dispatch]);

  return (
    <Router>
      <div className="app">
        <div className="container">
          <Header />
          <Menu />
          <Route exact path="/" component={CategoryList} />
          <Route exact path="/category/:name" component={WordList} />
        </div>
      </div>
    </Router>
  );
};

export default App;
