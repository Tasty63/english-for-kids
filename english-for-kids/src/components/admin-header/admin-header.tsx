import { useDispatch } from 'react-redux';
import { Link, NavLink } from 'react-router-dom';
import { logout } from '../../redux/actions';
import './admin-header.scss';

const AdminHeader: React.FC = () => {
  const dispatch = useDispatch();

  return (
    <div className="admin-header">
      <div className="admin-header__links">
        <Link to="/admin/categories" className="admin-header__link">
          Categories
        </Link>
        <Link to="/admin/categories" className="admin-header__link">
          Words
        </Link>
      </div>
      <button className="admin-header__logout-button" type="button" onClick={() => dispatch(logout())}>
        Log out
      </button>
    </div>
  );
};

export default AdminHeader;
