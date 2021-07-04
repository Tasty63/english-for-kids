import './burger.scss';
import { useSelector } from 'react-redux';
import { RootState } from '../../../redux/store';

const Burger = () => {
  const isOpen = useSelector((store: RootState) => store.menu.isOpen);
  const className = isOpen ? 'header__burger burger burger_active' : 'header__burger burger';

  return (
    <div className={className}>
      <div className="burger__line burger__line_top" />
      <div className="burger__line burger__line_mid" />
      <div className="burger__line burger__line_bottom" />
    </div>
  );
};

export default Burger;
