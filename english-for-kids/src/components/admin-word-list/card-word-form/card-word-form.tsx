import './card-word-form.scss';
import { useState } from 'react';
import { CardWordFormProps, CardForm } from '../../../app.api';

const CardWordForm: React.FC<CardWordFormProps> = ({
  handleSubmit,
  name,
  setEdit,
  setPreview,
  previewImage,
}: CardWordFormProps) => {
  const [form, setForm] = useState<CardForm>({
    wordName: name || '',
    translation: '',
    image: null,
    audio: null,
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

    const fileName = event.target.name;
    const file = event.target.files[0];

    if (!file) {
      return;
    }

    if (fileName === 'audio') {
      setForm({ ...form, audio: file });
      return;
    }

    setForm({ ...form, image: file });
    addPreview(file);
  };

  const handleCancel = () => {
    setEdit(false);
  };

  return (
    <form
      className="card-form"
      onSubmit={event => handleSubmit(event, form.wordName, form.translation, form.image, form.audio)}
    >
      <input
        className="card-form__input"
        type="text"
        name="wordName"
        placeholder="Name"
        value={form.wordName}
        onChange={handleChange}
      />
      <input
        className="card-form__input"
        type="text"
        name="translation"
        placeholder="Translation"
        value={form.translation}
        onChange={handleChange}
      />
      <div className="card-form__wrapper">
        <label htmlFor="audio" className="card-form__label">
          Choose audio:
        </label>
        <input className="card-form__input-audio" type="file" name="audio" accept=".mp3" onChange={getFile} />
      </div>
      <div className="card-form__wrapper">
        <label htmlFor="image" className="card-form__label">
          Choose image:
        </label>
        <input
          className="card-form__input-image"
          type="file"
          name="image"
          accept=".png,.jpg,.jpeg,.svg"
          onChange={getFile}
        />

        <img src={previewImage || '/images/upload.jpg'} alt="word" className="card-form__image" />
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

export default CardWordForm;
