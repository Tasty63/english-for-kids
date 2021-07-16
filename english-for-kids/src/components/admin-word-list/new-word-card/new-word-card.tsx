import './new-word-card.scss';

const NewWordCard: React.FC = () => {
  return (
    <div className="new-card">
      <h5 className="new-card__title">Add new Word</h5>
      <button className="new-card__button" type="button">
        +
      </button>
    </div>
  );
};

export default NewWordCard;
