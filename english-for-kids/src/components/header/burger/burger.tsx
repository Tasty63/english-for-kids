import './burger.scss';
import { useDispatch, useSelector } from 'react-redux';
import { toggleMenu } from '../../../redux/actions';
import {RootState} from '../../../redux/store';

const Burger = () => {

  const dispatch = useDispatch();
  const isOpen = useSelector((store: RootState) => store.menu.isOpen)
  const className = isOpen ? "header__burger burger burger_active" : "header__burger burger"
 
  return (
      <div className={className} onClick={() => dispatch(toggleMenu())}>
        <div className="burger__line burger__line_top" />
        <div className="burger__line burger__line_mid" />
        <div className="burger__line burger__line_bottom" />
      </div>
  );
}

export default Burger;