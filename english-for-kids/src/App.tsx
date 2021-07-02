import Header from './components/header/Header';
import CategoryList from './components/categories-list/categories-list';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { initCategories, toggleMenu } from './redux/actions';
import WordList from './components/word-list/word-list';
import Menu from './components/menu/menu';

function App() {
  //TODO: закрытие меню по клику / создать кнопку игры / начать логику игры / доделать категории
  const dispatch = useDispatch();
  dispatch(initCategories());
  
  return (
    <Router>
      <div className="app" onClick={({target}) => dispatch(toggleMenu(target))}>
        <div className="container">
          <Header></Header>
          <Menu></Menu>
          <Route exact path="/" component={CategoryList} />
          <Route exact path="/category/:name" component={WordList}/>
        </div>
      </div>
    </Router>
  );
}

export default App;
