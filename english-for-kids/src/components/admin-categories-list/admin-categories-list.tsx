import './admin-categories-list.scss';
import { useSelector } from 'react-redux';
import AdminCategoryCard from './admin-category-card/admin-category-card';
import { RootState } from '../../redux/store';
import NewCategoryCard from './new-category-card/new-category-card';

const AdminCategoryList: React.FC = () => {
  const categories = useSelector((state: RootState) => state.categories.list);

  return (
    <div className="card-list">
      {categories.map(category => (
        <AdminCategoryCard
          name={category.name}
          wordsAmount={category.words.length}
          preview={category.preview}
          id={category._id}
          key={category._id}
        />
      ))}
      <NewCategoryCard />
    </div>
  );
};

export default AdminCategoryList;
