import { BrowserRouter as Router, Route } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { RootState } from './redux/store';
import Header from './components/header/Header';
import CategoryList from './components/categories-list/categories-list';
import { initCategories, initStatistics } from './redux/actions';
import WordList from './components/word-list/word-list';
import Menu from './components/menu/menu';
import PopUp from './components/pop-up/pop-up';
import Statistics from './components/statistics/statistics';

const App: React.FC = () => {
  const dispatch = useDispatch();
  const gameResult = useSelector((state: RootState) => state.game.result);
  const statistics = useSelector((state: RootState) => state.statistics);

  useEffect(() => {
    dispatch(initCategories());
    dispatch(initStatistics());
  }, [dispatch]);
  window.onbeforeunload = () => {
    localStorage.setItem('tasty63-statistics', JSON.stringify(statistics));
  };

  return (
    <Router>
      <div className="app">
        <div className="container">
          <Header />
          <Menu />
          {gameResult && <PopUp gameResult={gameResult} />}
          <Route exact path="/" component={CategoryList} />
          <Route path="/statistics" component={Statistics} />
          <Route exact path="/category/:name" component={WordList} />
        </div>
      </div>
    </Router>
  );
};

export default App;
