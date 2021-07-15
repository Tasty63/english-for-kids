import './game-pop-up.scss';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { endGameRedirectionDelayMs, GameResults } from '../../utils/config';
import { RootState } from '../../redux/store';
import { GamePopUpProps } from '../../app.api';
import { stopGame } from '../../redux/actions';

const GamePopUp: React.FC<GamePopUpProps> = ({ gameResult }: GamePopUpProps) => {
  const mistakenWords = useSelector((state: RootState) => state.game.mistakenWords);
  const mistakesAmount = mistakenWords.reduce((acc: number, item) => {
    return acc + item.mistakesAmount;
  }, 0);

  const dispatch = useDispatch();
  const history = useHistory();

  useEffect(() => {
    setTimeout(() => {
      history.push('/statistics');
      dispatch(stopGame());
    }, endGameRedirectionDelayMs);
  }, [dispatch, history]);

  return (
    <div className="pop-up pop-up_white">
      <div className="pop-up__content">
        <img src={gameResult === GameResults.Win ? '/images/success.jpg' : '/images/failure.jpg'} alt={gameResult} />
        {gameResult === GameResults.Lose && <div className="pop-up__fails">{mistakesAmount} Mistakes</div>}
      </div>
    </div>
  );
};
export default GamePopUp;
