import { NavLink } from 'react-router-dom';
import css from './AuthNav.module.css';

export default function AuthNav() {
  return (
    <div className={css.wraper}>
      <NavLink
        to="/register"
        className={({ isActive }) =>
          isActive ? `${css.navlink} ${css.active}` : css.navlink
        }
      >
        Register
      </NavLink>
      <NavLink
        to="/login"
        className={({ isActive }) =>
          isActive ? `${css.navlink} ${css.active}` : css.navlink
        }
      >
        Log In
      </NavLink>
    </div>
  );
}
