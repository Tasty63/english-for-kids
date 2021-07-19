import './card-category-form.scss';
import { useState } from 'react';
import { CardCategoryFormProps, CategoryForm } from '../../../app.api';

const CardWordForm: React.FC = () => {
  const [form, setForm] = useState<CategoryForm>({
    categoryName: '',
    image: null,
  });

  const handleChange = ({ target }: React.ChangeEvent) => {
    if (target instanceof HTMLInputElement) {
      setForm({ ...form, [target.name]: target.value });
    }
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
  };

  return (
    <form className="card-form">
      <input className="card-form__input" type="text" name="word name" placeholder="Name" onChange={handleChange} />
    </form>
  );
};

export default CardWordForm;
