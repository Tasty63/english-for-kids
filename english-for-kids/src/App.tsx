import Header from './components/header/Header';
import CategoryList from './components/categories-list/categories-list';
import cardCategories from './categories-data';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

function App() {

  return (
    <Router>
      <div className="app">
        <Header></Header>
        <CategoryList categories={cardCategories}></CategoryList>
      </div>
    </Router>
  );
}

export default App;
