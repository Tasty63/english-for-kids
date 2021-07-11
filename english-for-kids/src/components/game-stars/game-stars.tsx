import './game-stars.scss';
import { useSelector } from 'react-redux';
import { RootState } from '../../redux/store';
import { MistakenWord } from '../../app.api';

const GameStars: React.FC = () => {
  const mistakenWords = useSelector((state: RootState) => state.game.mistakenWords);
  const guessedWords = useSelector((state: RootState) => state.game.guessedWords);

  const mistakeStars = (words: MistakenWord[]) => {
    return words.reduce((acc: JSX.Element[], word) => {
      for (let i = 0; i < word.mistakesAmount; i++) {
        acc.push(<div className="star star_mistake" key={`${word.id}${i}`} />);
      }

      return acc;
    }, []);
  };

  return (
    <div className="stars">
      {mistakeStars(mistakenWords)}
      {guessedWords.map((word, index) => (
        <div className="star star_guess" key={`${word}${index}`} />
      ))}
    </div>
  );
};

export default GameStars;
