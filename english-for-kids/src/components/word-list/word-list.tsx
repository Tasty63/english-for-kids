import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { RouteParams } from '../../app.api';
import { RootState } from '../../redux/store';
import { Modes } from '../../utils/config';
import { removeSpacesfromWord } from '../../utils/helpers';
import WordCardContainer from '../card/word-card-container';
import RepeatButton from '../repeat-button/repeat-button';
import StartButton from '../start-button/start-button';

const WordList: React.FC = () => {
  const { name } = useParams<RouteParams>();
  const categories = useSelector((state: RootState) => state.categories.list);
  const mode = useSelector((state: RootState) => state.mode.current);
  const isGameStarted = useSelector((state: RootState) => state.game.isStarted);

  const currentCategory = categories.find(category => removeSpacesfromWord(category.name) === name);

  return (
    <div className="card-list">
      {currentCategory?.words.map(wordData => (
        <WordCardContainer
          word={wordData.word}
          image={wordData.image}
          audioSrc={wordData.audioSrc}
          translation={wordData.translation}
          id={wordData.id}
          key={wordData.id}
        />
      ))}
      {mode === Modes.Play && isGameStarted ? <RepeatButton /> : mode === Modes.Play && <StartButton />}
    </div>
  );
};

export default WordList;
