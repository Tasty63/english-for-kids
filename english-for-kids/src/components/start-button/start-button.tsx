import { useDispatch } from 'react-redux';
import { startGame } from '../../redux/actions';
import './start-button.scss';

const StartButton: React.FC = () => {
  const dispatch = useDispatch();

  return (
    <div className="start-button" onClick={() => dispatch(startGame())}>
      <div className="start-button__triangle" />
    </div>
  );
};

export default StartButton;
