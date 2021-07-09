import './pop-up.scss';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { GameResults } from '../../utils/config';
import { RootState } from '../../redux/store';
import { PopUpProps } from '../../app.api';
import { stopGame } from '../../redux/actions';

const PopUp: React.FC<PopUpProps> = ({ gameResult }: PopUpProps) => {
  const mistakenWords = useSelector((state: RootState) => state.game.mistakenWords);
  const mistakesAmount = mistakenWords.reduce((acc: number, item) => {
    return acc + item.mistakesAmount;
  }, 0);

  const dispatch = useDispatch();
  const hisory = useHistory();

  useEffect(() => {
    setTimeout(() => {
      hisory.push('/statistics');
      dispatch(stopGame());
    }, 2000);
  }, [dispatch, hisory]);

  return (
    <div className="pop-up">
      <div className="pop-up__content">
        <img src={gameResult === GameResults.Win ? '/images/success.jpg' : '/images/failure.jpg'} alt={gameResult} />
        {gameResult === GameResults.Lose && <div className="pop-up__fails">{mistakesAmount} Mistakes</div>}
      </div>
    </div>
  );
};
export default PopUp;
