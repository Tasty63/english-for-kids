import { CardCategoryProps } from '../../app.api';
import CategoryCard from '../card/card';
import './categories-page.scss';

const CategoriesPage = ({categories}: CardCategoryProps) => {
 
 
  return (
    <div className="category-list">
      {categories.map(category => {
        return <CategoryCard {...category} key={category.id}></CategoryCard>
      })}
    </div>
  );
}
  

export default CategoriesPage;