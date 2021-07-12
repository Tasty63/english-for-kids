import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { RootState } from './redux/store';
import { initCategories, initStatistics } from './redux/actions';
import useRoutes from './utils/use-routes';

const App: React.FC = () => {
  const dispatch = useDispatch();
  const appRoutes = useRoutes({ isAuthenticated: false });
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
        <div className="container">{appRoutes}</div>
      </div>
    </Router>
  );
};

export default App;
