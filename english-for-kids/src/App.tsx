import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { initCategories, getStatistics } from './redux/actions';
import useRoutes from './utils/use-routes';

const App: React.FC = () => {
  const dispatch = useDispatch();
  const appRoutes = useRoutes({ isAuthenticated: false });

  useEffect(() => {
    dispatch(initCategories());
    dispatch(getStatistics());
  }, [dispatch]);

  return (
    <Router>
      <div className="app">
        <div className="container">{appRoutes}</div>
      </div>
    </Router>
  );
};

export default App;
