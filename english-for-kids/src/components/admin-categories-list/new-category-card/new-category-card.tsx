import React, { useState } from 'react';
import { CategoryForm } from '../../../app.api';
import './new-category-card.scss';

const NewCategoryCard: React.FC = () => {
  const [isEditing, setEdit] = useState(false);
  const [form, setForm] = useState<CategoryForm>({
    name: '',
    previewFile: null,
  });
  const [image, setImage] = useState<string | null>('');

  const handleChange = ({ target }: React.ChangeEvent) => {
    if (target instanceof HTMLInputElement) {
      setForm({ ...form, [target.name]: target.value });
    }
  };

  const handleSubmitChanges = (event: React.FormEvent) => {
    event?.preventDefault();
  };

  const getFiles = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (!event.target.files) {
      return;
    }
    const file = event.target.files[0];

    if (!file || !file.type.match('image')) {
      return;
    }

    setForm({ ...form, previewFile: file });

    const reader = new FileReader();
    reader.onloadend = ({ target }) => {
      if (target && !(target.result instanceof ArrayBuffer)) {
        setImage(target.result);
        console.log(target);
      }
    };

    reader.readAsDataURL(file);
  };

  return (
    <>
      {isEditing ? (
        <form className="new-card" onSubmit={handleSubmitChanges}>
          <input className="new-card__input" type="text" placeholder="name" onChange={handleChange} />
          <div className="new-card__preview">
            <label htmlFor="preview" className="new-card__label">
              Choose preview
            </label>
            <input
              className="new-card__input-image"
              type="file"
              name="preview"
              accept=".png,.jpg,.jpeg,.svg"
              onChange={getFiles}
            />

            {image && <img src={image} alt="" className="new-card__image" />}
          </div>
          <button className="new-card__submit" type="submit">
            Submit
          </button>
          <button className="new-card__cancel" type="button" onClick={() => setEdit(false)}>
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
