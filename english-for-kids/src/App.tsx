import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { RootState } from './redux/store';
import { initCategories, initStatistics } from './redux/actions';
import UseRoutes from './utils/use-routes';

const App: React.FC = () => {
  const dispatch = useDispatch();
  const statistics = useSelector((state: RootState) => state.statistics);

  useEffect(() => {
    dispatch(initCategories());
    dispatch(initStatistics());
  }, [dispatch]);

  window.onbeforeunload = () => {
    localStorage.setItem('tasty63-statistics', JSON.stringify(statistics));
  };

  return (
    <div className="app">
      <div className="container">
        <Router>
          <UseRoutes isAuthenticated={false} />
        </Router>
      </div>
    </div>
  );
};

export default App;
