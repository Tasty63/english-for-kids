import { useSelector } from 'react-redux';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { UseRouteProps } from '../app.api';
import { RootState } from '../redux/store';
import CategoryList from '../components/categories-list/categories-list';
import Header from '../components/header/Header';
import Menu from '../components/menu/menu';
import PopUp from '../components/pop-up/pop-up';
import StatisticsContainer from '../components/statistics/statistics-container';
import WordList from '../components/word-list/word-list';

const UseRoutes: React.FC<UseRouteProps> = ({ isAuthenticated }: UseRouteProps) => {
  const gameResult = useSelector((state: RootState) => state.game.result);
  if (isAuthenticated) {
    return <h1>congratulation</h1>;
  }
  return (
    <Router>
      <Header />
      <Menu />
      {gameResult && <PopUp gameResult={gameResult} />}
      <Route exact path="/" component={CategoryList} />
      <Route path="/statistics" component={StatisticsContainer} />
      <Route exact path="/category/:name" component={WordList} />
    </Router>
  );
};

export default UseRoutes;
