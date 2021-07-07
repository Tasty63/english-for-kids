import { useDispatch, useSelector } from 'react-redux';
import { repeatWord } from '../../redux/actions';
import { RootState } from '../../redux/store';
import './repeat-button.scss';

const RepeatButton: React.FC = () => {
  const dispatch = useDispatch();
  const currentWord = useSelector((state: RootState) => state.game.currentWord);

  return (
    <div className="repeat-button" onClick={() => currentWord && dispatch(repeatWord(currentWord))}>
      <div className="repeat-button__icon" />
    </div>
  );
};

export default RepeatButton;
