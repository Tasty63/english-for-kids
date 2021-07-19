import { useDispatch } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { logout } from '../../redux/actions';
import './admin-header.scss';

const AdminHeader: React.FC = () => {
  const dispatch = useDispatch();

  return (
    <div className="admin-header">
      <div className="admin-header__links">
        <NavLink exact to="/admin" className="admin-header__link">
          Categories
        </NavLink>
        <NavLink to="/admin/category" className="admin-header__link">
          Words
        </NavLink>
      </div>
      <button className="admin-header__logout-button" type="button" onClick={() => dispatch(logout())}>
        Log out
      </button>
    </div>
  );
};

export default AdminHeader;
