import './admin-category-card.scss';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { CategoryEditCardProps } from '../../../app.api';
import { removeSpacesfromWord } from '../../../utils/helpers';

const AdminCategoryCard: React.FC<CategoryEditCardProps> = ({ name, wordsAmount, preview }: CategoryEditCardProps) => {
  const nameWithoutSpaces = removeSpacesfromWord(name);
  const [isEditing, setEdit] = useState(false);

  return (
    <>
      {isEditing ? (
        <form className="new-card">
          <input className="new-card__input" type="text" placeholder="name" value={name} />
          <input className="new-card__input" type="text" />
          <button className="new-card__submit" type="submit">
            Submit
          </button>
          <button className="new-card__cancel" type="button" onClick={() => setEdit(false)}>
            Cancel
          </button>
        </form>
      ) : (
        <div className="admin-category-card">
          <h5 className="admin-category-card__title">{name}</h5>
          <button className="admin-category-card__close-button" type="button">
            X
          </button>
          <div className="admin-category-card__words-info">Words: {wordsAmount}</div>
          <footer className="admin-category-card__footer">
            <button
              className="admin-category-card__update-button"
              type="button"
              onClick={() => {
                setEdit(true);
              }}
            >
              Update
            </button>
            <button className="admin-category-card__add-word-button" type="button">
              <Link to={`/admin/category/${nameWithoutSpaces}`} className="admin-category-card__link">
                Add word
              </Link>
            </button>
          </footer>
        </div>
      )}
    </>
  );
};

export default AdminCategoryCard;
