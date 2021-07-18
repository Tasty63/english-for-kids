import './card-category-form.scss';
import { useState } from 'react';
import { CardCategoryFormProps, CategoryForm } from '../../../app.api';

const CardCategoryForm: React.FC<CardCategoryFormProps> = ({
  name,
  setEdit,
  initialPreview,
  setPreview,
  handleSubmit,
  previewImage,
}: CardCategoryFormProps) => {
  const [form, setForm] = useState<CategoryForm>({
    categoryName: name || '',
    image: null,
  });

  const handleChange = ({ target }: React.ChangeEvent) => {
    if (target instanceof HTMLInputElement) {
      setForm({ ...form, [target.name]: target.value });
    }
  };

  const addPreview = (file: Blob) => {
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
    addPreview(file);
  };

  const handleCancel = () => {
    setEdit(false);
    initialPreview ? setPreview(initialPreview) : setPreview('');
  };

  return (
    <form className="card-form" onSubmit={event => handleSubmit(event, form.categoryName, form.image)}>
      <input
        className="card-form__input"
        type="text"
        name="categoryName"
        placeholder="Name"
        value={form.categoryName}
        onChange={handleChange}
      />
      <div className="card-form__wrapper">
        <label htmlFor="preview" className="card-form__label">
          Choose preview:
        </label>
        <input
          className="card-form__input-image"
          type="file"
          name="preview"
          accept=".png,.jpg,.jpeg,.svg"
          onChange={getFile}
        />

        <img src={previewImage || '/images/upload.jpg'} alt="preview" className="card-form__image" />
      </div>
      <div className="card-form__footer">
        <button className="card-form__submit" type="submit">
          Submit
        </button>
        <button className="card-form__cancel" type="button" onClick={handleCancel}>
          Cancel
        </button>
      </div>
    </form>
  );
};

export default CardCategoryForm;
