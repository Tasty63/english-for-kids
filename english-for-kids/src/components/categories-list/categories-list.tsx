import './categories-list.scss';
import { useSelector } from 'react-redux';
import CategoryCard from '../card/category-card';
import { RootState } from '../../redux/store';

const CategoryList: React.FC = () => {
  const categories = useSelector((state: RootState) => state.categories.list);

  return (
    <div className="card-list">
      {categories.map(category => (
        <CategoryCard name={category.name} preview={category.preview} key={category.id} />
      ))}
    </div>
  );
};

export default CategoryList;
