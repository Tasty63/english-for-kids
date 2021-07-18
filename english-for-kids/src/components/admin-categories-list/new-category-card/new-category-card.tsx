import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { CategoryForm } from '../../../app.api';
import { createCategory } from '../../../redux/actions';
import AdminCardForm from '../admin-card-form';
import './new-category-card.scss';

const NewCategoryCard: React.FC = () => {
  const [isEditing, setEdit] = useState(false);
  const [previewImage, setPreview] = useState<string | null>(null);
  const dispatch = useDispatch();

  const handleSubmitChanges = (event: React.FormEvent, categoryName: string, image: Blob | null) => {
    event?.preventDefault();
    dispatch(createCategory(categoryName, image));
    setEdit(false);
  };

  return (
    <>
      {isEditing ? (
        <AdminCardForm
          setEdit={setEdit}
          setPreview={setPreview}
          handleSubmit={handleSubmitChanges}
          previewImage={previewImage}
        />
      ) : (
        <div className="new-card">
          <h5 className="new-card__title">New category</h5>
          <button className="new-card__button" type="button" onClick={() => setEdit(true)}>
            +
          </button>
        </div>
      )}
    </>
  );
};

export default NewCategoryCard;
