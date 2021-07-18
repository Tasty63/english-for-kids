import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { CategoryForm } from '../../app.api';
import { updateCategory } from '../../redux/actions';

export type CardFormProps = {
  name?: string;
  preview?: string;
  setEdit: (state: boolean) => void;
  setPreview: (file: string | null) => void;
  previewImage?: string | null;
  handleSubmit: (event: React.FormEvent, categoryName: string, image: Blob | null) => void;
};

const AdminCardForm: React.FC<CardFormProps> = ({
  name,
  setEdit,
  preview,
  setPreview,
  handleSubmit,
  previewImage,
}: CardFormProps) => {
  const [form, setForm] = useState<CategoryForm>({
    categoryName: name || '',
    image: null,
  });
  const dispatch = useDispatch();

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
    preview ? setPreview(preview) : setPreview('');
  };

  return (
    <form className="new-card" onSubmit={event => handleSubmit(event, form.categoryName, form.image)}>
      <input
        className="new-card__input"
        type="text"
        name="categoryName"
        value={form.categoryName}
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

        {previewImage && <img src={previewImage} alt="Preview" className="new-card__image" />}
      </div>
      <button className="new-card__submit" type="submit">
        Submit
      </button>
      <button className="new-card__cancel" type="button" onClick={handleCancel}>
        Cancel
      </button>
    </form>
  );
};

export default AdminCardForm;
