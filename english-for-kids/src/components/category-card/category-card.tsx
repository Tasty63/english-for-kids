import './category-card.scss';
import { Category } from '../../app.api';
import { Link } from 'react-router-dom';
import { removeSpacesfromWord } from '../../utils/helpers';

const CategoryCard = ( {name, image}: Category) => {
  const nameWithoutSpaces = removeSpacesfromWord(name);
 
  return (
      <Link to={`/category/${nameWithoutSpaces}`} className="card">
        <div className="card__image-wrapper">
          <img src={image} alt={name} className="card__image" />
        </div>
        <footer className="card__footer">
          <span className="card__name">{name}</span>
        </footer>
      </Link>
  )
}

export default CategoryCard;