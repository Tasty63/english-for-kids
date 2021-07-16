import { useSelector } from 'react-redux';
import { Redirect, Route } from 'react-router-dom';
import { RootState } from '../redux/store';
import CategoryList from '../components/categories-list/categories-list';
import Header from '../components/header/Header';
import Menu from '../components/menu/menu';
import GamePopUp from '../components/game-pop-up/end-game-pop-up';
import StatisticsContainer from '../components/statistics/statistics-container';
import WordList from '../components/word-list/word-list';
import PopUp from '../components/pop-up/pop-up';
import LoginForm from '../components/login-form/login-form';
import EditCategories from '../components/admin-categories-list/admin-categories-list';
import AdminHeader from '../components/admin-header/admin-header';

const useRoutes = (): JSX.Element => {
  const gameResult = useSelector((state: RootState) => state.game.result);
  const isLogged = useSelector((state: RootState) => state.login.isLogged);

  if (isLogged) {
    return (
      <>
        <AdminHeader />
        <div className="container">
          <Route exact path="/admin/categories" component={EditCategories} />
          <Route exact path="/admin/categories/:name" />
          <Redirect to="/admin/categories" />
        </div>
      </>
    );
  }
  return (
    <div className="container">
      <Header />
      <Menu />
      {gameResult && <GamePopUp gameResult={gameResult} />}
      <PopUp>
        <LoginForm />
      </PopUp>
      <Route exact path="/" component={CategoryList} />
      <Route path="/statistics" component={StatisticsContainer} />
      <Route exact path="/category/:name" component={WordList} />
      <Redirect to="/" />
    </div>
  );
};

export default useRoutes;
