import { NavLink } from 'react-router-dom';
import style from './Navbar.module.css';

const Navbar = () => {
    return (
      <nav className={style.nav}>
        <div className={style.link}>
          <NavLink to="/profile" className={ navData => navData.isActive ? style.activeLink : style.item}>Profile</NavLink>
        </div>
        <div className={style.link}>
          <NavLink to="/dialogs" className={ navData => navData.isActive ? style.activeLink : style.item}>Messages</NavLink>
        </div>
        <div className={style.link}>
          <NavLink to="/news" className={ navData => navData.isActive ? style.activeLink : style.item}>News</NavLink>
        </div>
        <div className={style.link}>
          <NavLink to="/music" className={ navData => navData.isActive ? style.activeLink : style.item}>Music</NavLink>
        </div>
        <div className={style.link}>
          <NavLink to="/settings" className={ navData => navData.isActive ? style.activeLink : style.item}>Settings</NavLink>
        </div>
      </nav>
    );
}

export default Navbar;