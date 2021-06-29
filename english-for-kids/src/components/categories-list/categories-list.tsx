import './categories-list.scss';
import { CardCategoryProps } from '../../app.api';
import CategoryCard from '../card/card';
import {BrowserRouter as Router, Route, Switch, Link, useParams} from 'react-router-dom';

const CategoryList = ({categories}: CardCategoryProps) => {
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