import './categories-list.scss';
import CategoryCard from '../card/card';
import {BrowserRouter as Router, Route, Switch, Link, useParams} from 'react-router-dom';
import { useSelector } from 'react-redux';
import {RootState} from '../../redux/store';

const CategoryList = () => {
  const categories = useSelector((state: RootState) => state.categories.list);

  return (
    <Router>
      <div className="category-list">
          {categories.map(category => {
            return <CategoryCard {...category} key={category.id}></CategoryCard>
          })}
      </div>
      <Switch>
          <Route path="/:id" children={<div>lol</div>} />
      </Switch>
    </Router>
  );
}
  

export default CategoryList;