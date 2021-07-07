import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { RouteParams } from '../../app.api';
import { RootState } from '../../redux/store';
import { Modes } from '../../utils/config';
import { playPronunciation, removeSpacesfromWord } from '../../utils/helpers';

import WordCardContainer from '../card/word-card-container';
import RepeatButton from '../repeat-button/repeat-button';
import StartButton from '../start-button/start-button';

const WordList: React.FC = () => {
  const { name } = useParams<RouteParams>();
  const categories = useSelector((state: RootState) => state.categories.list);
  const currentCategory = categories.find(category => removeSpacesfromWord(category.name) === name);

  const wordsAudioSrc = currentCategory!.words.map(wordData => wordData.audioSrc);
  const mode = useSelector((state: RootState) => state.mode.current);
  const isGameStarted = useSelector((state: RootState) => state.game.isStarted);

  const playPronunciationOnClick = ({ target }: React.MouseEvent, audioSrc: string): void => {
    if (!(target instanceof HTMLElement)) {
      return;
    }
    const isTargetFlipButton = target.classList.contains('card__flip');

    if (!isTargetFlipButton) {
      playPronunciation(audioSrc);
    }
  };

  return (
    <div className="card-list">
      {currentCategory?.words.map(wordData => (
        <WordCardContainer
          word={wordData.word}
          image={wordData.image}
          translation={wordData.translation}
          playPronunciationOnClick={event => playPronunciationOnClick(event, wordData.audioSrc)}
          id={wordData.id}
          key={wordData.id}
        />
      ))}
      {mode === Modes.Play && isGameStarted ? (
        <RepeatButton />
      ) : (
        mode === Modes.Play && <StartButton wordsAudioSrc={wordsAudioSrc} />
      )}
    </div>
  );
};

export default WordList;
