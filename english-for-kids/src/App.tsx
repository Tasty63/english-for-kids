import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { getCategories, getStatistics, initLogin } from './redux/actions';
import useRoutes from './utils/use-routes';

const App: React.FC = () => {
  const dispatch = useDispatch();
  const appRoutes = useRoutes();

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
