import './admin-category-card.scss';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { removeSpacesfromWord } from '../../../utils/helpers';
import { deleteCategory } from '../../../redux/actions';
import { AdminCategoryCardProps } from '../../../app.api';

const AdminCategoryCard: React.FC<AdminCategoryCardProps> = ({
  id,
  name,
  wordsAmount,
  preview,
}: AdminCategoryCardProps) => {
  const [isEditing, setEdit] = useState(false);
  const nameWithoutSpaces = removeSpacesfromWord(name);
  const dispatch = useDispatch();

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
          <button
            className="admin-category-card__close-button"
            type="button"
            onClick={() => dispatch(deleteCategory(id))}
          >
            X
          </button>
          <div className="admin-category-card__words-info">
            Words: {wordsAmount}
            <img src={preview} alt="preview" className="admin-category-card__preview" />
          </div>
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
