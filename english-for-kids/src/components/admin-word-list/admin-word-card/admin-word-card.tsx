import './admin-word-card.scss';
import React, { useState } from 'react';
import { WordData } from '../../../app.api';

export type AdminWordForm = {
  word: string;
  image: string;
  translation: string;
  audioSrc: string;
};

const AdminWordCard: React.FC<WordData> = ({ word, image, translation, audioSrc }: WordData) => {
  const [isEditing, setEdit] = useState(false);
  // const [form, setForm] = useState<AdminWordForm>({
  //   word,
  //   image,
  //   translation,
  //   audioSrc,
  // });

  const handleSubmitChanges = (event: React.MouseEvent) => {
    event?.preventDefault();
    setEdit(false);
  };

  return (
    <>
      {isEditing ? (
        <form className="admin-word-card">
          <input className="admin-word-card__name" type="text" value={word} />
          <input className="admin-word-card__translation" type="text" name="translation" value={translation} />
          <input className="admin-word-card__sound" type="text" name="sound" />
          <input className="admin-word-card__image" type="text" name="image" />

          <button className="admin__button" type="button" onClick={handleSubmitChanges}>
            submit
          </button>
          <button className="admin__button" type="button" onClick={() => setEdit(false)}>
            cancel
          </button>
        </form>
      ) : (
        <div className="admin-word-card">
          <div className="admin-word-card__name">Word: {word}</div>
          <div className="admin-word-card__translation">Transaltion: {translation}</div>
          <div className="admin-word-card__sound">Audio: {audioSrc}</div>
          <div className="admin-word-card__image-container">
            <div className="admin-word-card__image-text">Image:</div>
            <img src={image} className="admin-word-card__image" alt={word} />
          </div>
          <button className="admin-word-card__button" type="button" onClick={() => setEdit(true)}>
            Change
          </button>
        </div>
      )}
    </>
  );
};

export default AdminWordCard;
