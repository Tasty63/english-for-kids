import { useState } from 'react';
import './new-word-card.scss';

const NewWordCard: React.FC = () => {
  const [isEditing, setEdit] = useState(false);

  return (
    <>
      {isEditing ? (
        <form className="new-card">
          <input type="text" className="new-card__input" placeholder="name" />
          <input className="new-card__input" type="text" placeholder="translation" />
          <input className="new-card__input" type="text" placeholder="sound" />
          <input className="new-card__input" type="text" placeholder="image" />

          <button className="new-card__submit" type="submit">
            Submit
          </button>
          <button className="new-card__cancel" type="button" onClick={() => setEdit(false)}>
            Cancel
          </button>
        </form>
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
