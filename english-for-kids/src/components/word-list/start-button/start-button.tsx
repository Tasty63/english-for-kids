import { useDispatch } from 'react-redux';
import { StartButtonProps } from '../../../app.api';
import { startGame } from '../../../redux/actions';
import './start-button.scss';

const StartButton: React.FC<StartButtonProps> = ({ gameWords }: StartButtonProps) => {
  const dispatch = useDispatch();

  return (
    <div className="start-button" onClick={() => dispatch(startGame(gameWords))}>
      <div className="start-button__triangle" />
    </div>
  );
};

export default StartButton;
