import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { getCategories, getStatistics, initLogin } from './redux/actions';
import useRoutes from './utils/use-routes';
import { RootState } from './redux/store';

const App: React.FC = () => {
  const isLogged = useSelector((state: RootState) => state.login.isLogged);
  const dispatch = useDispatch();
  const appRoutes = useRoutes(isLogged);

  useEffect(() => {
    dispatch(getCategories());
    dispatch(getStatistics());
    dispatch(initLogin());
  }, [dispatch]);

  return (
    <Router>
      <div className="app">{appRoutes}</div>
    </Router>
  );
};

export default App;
