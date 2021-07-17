import { useSelector } from 'react-redux';
import { Redirect, Route, Switch } from 'react-router-dom';
import { RootState } from '../../redux/store';
import CategoryList from '../categories-list/categories-list';
import GamePopUp from '../game-pop-up/end-game-pop-up';
import Header from '../header/Header';
import LoginForm from '../login-form/login-form';
import Menu from '../menu/menu';
import PopUp from '../pop-up/pop-up';
import StatisticsContainer from '../statistics/statistics-container';
import WordList from '../word-list/word-list';

const PublicRouter: React.FC = () => {
  const gameResult = useSelector((state: RootState) => state.game.result);

  return (
    <div className="container">
      <Header />
      <Menu />
      {gameResult && <GamePopUp gameResult={gameResult} />}
      <PopUp>
        <LoginForm />
      </PopUp>
      <Switch>
        <Route exact path="/" component={CategoryList} />
        <Route path="/statistics" component={StatisticsContainer} />
        <Route exact path="/category/:name" component={WordList} />
        <Redirect to="/" />
      </Switch>
    </div>
  );
};

export default PublicRouter;
