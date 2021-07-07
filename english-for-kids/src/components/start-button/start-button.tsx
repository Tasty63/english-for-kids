import { useDispatch } from 'react-redux';
import { StartButtonProps } from '../../app.api';
import { startGame } from '../../redux/actions';
import './start-button.scss';

const StartButton: React.FC<StartButtonProps> = ({ wordsAudioSrc }: StartButtonProps) => {
  const dispatch = useDispatch();

  return (
    <div className="start-button" onClick={() => dispatch(startGame(wordsAudioSrc))}>
      <div className="start-button__triangle" />
    </div>
  );
};

export default StartButton;
