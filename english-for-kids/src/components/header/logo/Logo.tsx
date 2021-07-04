import './logo.scss';
import { Link } from 'react-router-dom';

const Logo = () => (
  <Link to="/" className="header__logo logo">
    English for kids
  </Link>
);

export default Logo;
