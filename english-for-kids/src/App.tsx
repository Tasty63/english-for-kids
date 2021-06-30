import Header from './components/header/Header';
import CategoryList from './components/categories-list/categories-list';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { initCategories } from './redux/actions';

function App() {
  const dispatch = useDispatch();
  dispatch(initCategories());

  return (
    <Router>
      <div className="app">
        <Header></Header>
        <CategoryList></CategoryList>
      </div>
    </Router>
  );
}

export default App;
