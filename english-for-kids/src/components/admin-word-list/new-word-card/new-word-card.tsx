import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { createWord } from '../../../redux/actions';
import CardWordForm from '../card-word-form/card-word-form';
import './new-word-card.scss';

export type NewWordCardProps = {
  categoryId: string;
};

const NewWordCard: React.FC<NewWordCardProps> = ({ categoryId }: NewWordCardProps) => {
  const [isEditing, setEdit] = useState(false);
  const [previewImage, setPreview] = useState<string | null>(null);
  const dispatch = useDispatch();

  const handleSubmitChanges = (
    event: React.FormEvent,
    word: string,
    translation: string,
    image: Blob | null,
    audio: Blob | null,
  ) => {
    event?.preventDefault();
    dispatch(createWord(categoryId, word, translation, image, audio));
    setPreview(null);
    setEdit(false);
  };

  return (
    <>
      {isEditing ? (
        <CardWordForm
          handleSubmit={handleSubmitChanges}
          setEdit={setEdit}
          setPreview={setPreview}
          previewImage={previewImage}
        />
      ) : (
        <div className="new-card">
          <h5 className="new-card__title">Add new Word</h5>
          <button className="new-card__button" type="button" onClick={() => setEdit(true)}>
            +
          </button>
        </div>
      )}
    </>
  );
};

export default NewWordCard;
