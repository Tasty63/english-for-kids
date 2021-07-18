import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { CategoryForm } from '../../../app.api';
import { createCategory } from '../../../redux/actions';
import './new-category-card.scss';

const NewCategoryCard: React.FC = () => {
  const [isEditing, setEdit] = useState(false);
  const [form, setForm] = useState<CategoryForm>({
    categoryName: '',
    image: null,
  });
  const [preview, setPreview] = useState<string | null>(null);
  const dispatch = useDispatch();

  const handleChange = ({ target }: React.ChangeEvent) => {
    if (target instanceof HTMLInputElement) {
      setForm({ ...form, [target.name]: target.value });
    }
  };

  const handleSubmitChanges = (event: React.FormEvent) => {
    event?.preventDefault();
    dispatch(createCategory(form));
    setEdit(false);
    setPreview(null);
  };

  const handleCancel = () => {
    setPreview(null);
    setEdit(false);
  };

  const image = (file: Blob) => {
    const reader = new FileReader();

    reader.onloadend = ({ target }) => {
      if (target && !(target.result instanceof ArrayBuffer)) {
        setPreview(target.result);
      }
    };

    reader.readAsDataURL(file);
  };

  const getFile = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (!event.target.files) {
      return;
    }
    const file = event.target.files[0];

    if (!file || !file.type.match('image')) {
      return;
    }

    setForm({ ...form, image: file });
    image(file);
  };

  return (
    <>
      {isEditing ? (
        <form className="new-card" onSubmit={handleSubmitChanges}>
          <input
            className="new-card__input"
            type="text"
            name="categoryName"
            placeholder="name"
            onChange={handleChange}
          />
          <div className="new-card__preview">
            <label htmlFor="preview" className="new-card__label">
              Choose preview
            </label>
            <input
              className="new-card__input-image"
              type="file"
              name="preview"
              accept=".png,.jpg,.jpeg,.svg"
              onChange={getFile}
            />

            {preview && <img src={preview} alt="" className="new-card__image" />}
          </div>
          <button className="new-card__submit" type="submit">
            Submit
          </button>
          <button className="new-card__cancel" type="button" onClick={handleCancel}>
            Cancel
          </button>
        </form>
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
