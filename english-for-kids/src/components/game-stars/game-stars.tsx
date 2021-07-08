import './game-stars.scss';
import { useSelector } from 'react-redux';
import { RootState } from '../../redux/store';

const GameStars: React.FC = () => {
  const mistakenWords = useSelector((state: RootState) => state.game.mistakenWords);
  const guessedWords = useSelector((state: RootState) => state.game.guessedWords);

  return (
    <div className="stars">
      {mistakenWords.map((mistake, index) => (
        <div className="star star_mistake" key={`${mistake}${index}`} />
      ))}
      {guessedWords.map((guess, index) => (
        <div className="star star_guess" key={`${guess}${index}`} />
      ))}
    </div>
  );
};

export default GameStars;
