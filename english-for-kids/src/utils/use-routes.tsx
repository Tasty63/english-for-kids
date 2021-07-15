import { useSelector } from 'react-redux';
import { Route } from 'react-router-dom';
import { UseRouteProps } from '../app.api';
import { RootState } from '../redux/store';
import CategoryList from '../components/categories-list/categories-list';
import Header from '../components/header/Header';
import Menu from '../components/menu/menu';
import GamePopUp from '../components/game-pop-up/end-game-pop-up';
import StatisticsContainer from '../components/statistics/statistics-container';
import WordList from '../components/word-list/word-list';
import PopUp from '../components/pop-up/pop-up';
import LoginForm from '../components/login-form/login-form';

const useRoutes: React.FC<UseRouteProps> = ({ isAuthenticated }: UseRouteProps) => {
  const gameResult = useSelector((state: RootState) => state.game.result);
  if (isAuthenticated) {
    return (
      <>
        <Route exact path="/admin" />
        <Route exact path="/admin/category/:name" />
      </>
    );
  }
  return (
    <>
      <Header />
      <Menu />
      {gameResult && <GamePopUp gameResult={gameResult} />}
      <PopUp>
        <LoginForm />
      </PopUp>
      <Route exact path="/" component={CategoryList} />
      <Route path="/statistics" component={StatisticsContainer} />
      <Route exact path="/category/:name" component={WordList} />
    </>
  );
};

export default useRoutes;
