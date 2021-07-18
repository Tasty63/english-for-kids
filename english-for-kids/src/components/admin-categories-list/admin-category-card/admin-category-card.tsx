import './admin-category-card.scss';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { removeSpacesfromWord } from '../../../utils/helpers';
import { deleteCategory, updateCategory } from '../../../redux/actions';
import { AdminCategoryCardProps, CategoryForm } from '../../../app.api';
import AdminCardForm from '../admin-card-form';

const AdminCategoryCard: React.FC<AdminCategoryCardProps> = ({
  id,
  name,
  wordsAmount,
  preview,
}: AdminCategoryCardProps) => {
  const [isEditing, setEdit] = useState(false);
  const [previewImage, setPreview] = useState<string | null>(preview);

  const nameWithoutSpaces = removeSpacesfromWord(name);
  const dispatch = useDispatch();

  const handleSubmitChanges = (event: React.FormEvent, categoryName: string, image: Blob | null) => {
    event?.preventDefault();
    dispatch(updateCategory(id, categoryName, image));
    setEdit(false);
  };

  return (
    <>
      {isEditing ? (
        <AdminCardForm
          name={name}
          preview={preview}
          setEdit={setEdit}
          previewImage={previewImage}
          setPreview={setPreview}
          handleSubmit={handleSubmitChanges}
        />
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
            <img src={previewImage || ''} alt="preview" className="admin-category-card__preview" />
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
