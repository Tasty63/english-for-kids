import './new-category-card.scss';

const NewCategoryCard: React.FC = () => {
  return (
    <div className="new-card">
      <h5 className="new-card__title">New category</h5>
      <button className="new-card__button" type="button">
        +
      </button>
    </div>
  );
};

export default NewCategoryCard;
