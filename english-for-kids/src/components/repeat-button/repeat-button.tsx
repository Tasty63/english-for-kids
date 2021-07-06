import { useDispatch } from 'react-redux';
import { startGame } from '../../redux/actions';
import './repeat-button.scss';

const RepeatButton: React.FC = () => {
  const dispatch = useDispatch();

  return (
    <div className="repeat-button" onClick={() => dispatch(startGame())}>
      <div className="repeat-button__icon" />
    </div>
  );
};

export default RepeatButton;
