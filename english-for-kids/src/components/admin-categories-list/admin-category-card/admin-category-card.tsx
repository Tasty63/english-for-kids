import './admin-category-card.scss';
import { Link } from 'react-router-dom';
import { CategoryEditCardProps } from '../../../app.api';
import { removeSpacesfromWord } from '../../../utils/helpers';

const AdminCategoryCard: React.FC<CategoryEditCardProps> = ({ name, wordsAmount, preview }: CategoryEditCardProps) => {
  const nameWithoutSpaces = removeSpacesfromWord(name);

  return (
    <div className="admin-category-card">
      <h5 className="admin-category-card__title">{name}</h5>
      <button className="admin-category-card__close-button" type="button">
        X
      </button>
      <div className="admin-category-card__words-info">Words: {wordsAmount}</div>
      <footer className="admin-category-card__footer">
        <button className="admin-category-card__update-button" type="button">
          Update
        </button>
        <button className="admin-category-card__add-word-button" type="button">
          <Link to={`/admin/category/${nameWithoutSpaces}`} className="admin-category-card__link">
            Add word
          </Link>
        </button>
      </footer>
    </div>
  );
};

export default AdminCategoryCard;
