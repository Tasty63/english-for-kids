import './card.scss';
import { Category, Modes } from '../../app.api';
import { Link } from 'react-router-dom';
import { removeSpacesfromWord } from '../../utils/helpers';
import { useSelector } from 'react-redux';
import { RootState } from '../../redux/store';

const CategoryCard = ( {name, preview}: Category) => {
  const nameWithoutSpaces = removeSpacesfromWord(name);
  const mode = useSelector((state: RootState) => state.mode.current)
 
  return (
      <Link to={`/category/${nameWithoutSpaces}`} className="card">
        <div className="card__image-wrapper">
          <img src={preview} alt={name} className="card__image" />
        </div>
        <footer className={mode === Modes.Train ? "card__footer" : "card__footer card__footer_blue"}>
          <span className="card__name">{name}</span>
        </footer>
      </Link>
  )
}

export default CategoryCard;