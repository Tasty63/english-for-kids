import Header from './components/header/Header';
import CategoryList from './components/categories-list/categories-list';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { initCategories } from './redux/actions';
import WordList from './components/word-list/word-list';

function App() {
  //TODO: пофиксить навбар, добавить активность ссылкам
  const dispatch = useDispatch();
  dispatch(initCategories());
  
  return (
    <Router>
      <div className="app">
        <Header></Header>
        <Route exact path="/" component={CategoryList} />
        <Route exact path="/category/:name" component={WordList}/>
      </div>
    </Router>
  );
}

export default App;
