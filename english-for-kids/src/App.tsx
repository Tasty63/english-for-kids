import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { getCategories, getStatistics } from './redux/actions';
import useRoutes from './utils/use-routes';

const App: React.FC = () => {
  const dispatch = useDispatch();
  const appRoutes = useRoutes({ isAuthenticated: false });

  useEffect(() => {
    dispatch(getCategories());
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
