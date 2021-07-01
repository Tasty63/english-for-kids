import './categories-list.scss';
import CategoryCard from '../card/category-card';
import { useSelector } from 'react-redux';
import {RootState} from '../../redux/store';

const CategoryList = () => {
  const categories = useSelector((state: RootState) => state.categories.list);
  
  return (
    <div className="card-list">
        {categories.map(category => {
          return <CategoryCard {...category} key={category.id}></CategoryCard>
        })}
    </div>
  );
}
  

export default CategoryList;