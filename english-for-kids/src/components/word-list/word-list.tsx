import './word-list.scss';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation, useParams } from 'react-router-dom';
import { RouteParams } from '../../app.api';
import { stopGame } from '../../redux/actions';
import { RootState } from '../../redux/store';
import { Modes } from '../../utils/config';
import { removeSpacesfromWord } from '../../utils/helpers';
import WordCard from '../card/word-card';

import RepeatButton from '../repeat-button/repeat-button';
import StartButton from '../start-button/start-button';
import GameStars from '../game-stars/game-stars';

const WordList: React.FC = () => {
  const { name } = useParams<RouteParams>();
  const location = useLocation();
  const dispatch = useDispatch();

  const categories = useSelector((state: RootState) => state.categories.list);
  const mode = useSelector((state: RootState) => state.mode.current);
  const isGameStarted = useSelector((state: RootState) => state.game.isStarted);

  const currentCategory = categories.find(category => removeSpacesfromWord(category.name) === name);
  const wordsAudioSrc = currentCategory!.words.map(wordData => wordData.audioSrc);

  // const mistakes = Array.from({ length: mistakesAmount });

  useEffect(() => {
    dispatch(stopGame());
  }, [location, dispatch]);

  return (
    <>
      <GameStars />
      <div className="card-list">
        {currentCategory?.words.map(wordData => (
          <WordCard
            word={wordData.word}
            image={wordData.image}
            translation={wordData.translation}
            audioSrc={wordData.audioSrc}
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
    </>
  );
};

export default WordList;
