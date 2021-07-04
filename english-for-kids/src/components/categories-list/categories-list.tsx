import './categories-list.scss';
import { useSelector } from 'react-redux';
import CategoryCard from '../card/category-card';
import { RootState } from '../../redux/store';

const CategoryList = () => {
  const categories = useSelector((state: RootState) => state.categories.list);

  return (
    <div className="card-list">
      {categories.map((category) => <CategoryCard {...category} key={category.id} />)}
    </div>
  );
};

export default CategoryList;
