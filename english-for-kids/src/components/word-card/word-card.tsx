import './word-card.scss';
import { WordData } from '../../app.api';

const WordCard = ({word, image, audioSrc, translation}: WordData) => {

  return (
    <div className="card">
     <div className="card__image-wrapper">
       <img src={image} alt={word} className="card__image" />
     </div>
     <footer className="card__footer">
       <span className="card__name">{word}</span>
     </footer>
   </div>
  )
}
export default WordCard;