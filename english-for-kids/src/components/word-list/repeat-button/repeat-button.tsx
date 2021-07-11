import { useSelector } from 'react-redux';
import { RootState } from '../../../redux/store';
import { playAudio } from '../../../utils/helpers';
import './repeat-button.scss';

const RepeatButton: React.FC = () => {
  const currentWord = useSelector((state: RootState) => state.game.currentWord);

  return (
    <div className="repeat-button" onClick={() => currentWord && playAudio(currentWord.audio)}>
      <div className="repeat-button__icon" />
    </div>
  );
};

export default RepeatButton;
