import { useContext } from 'react';
import { Link } from 'react-router-dom';


import AuthContext from '../../store/auth-context'
import classes from './MainNavigation.module.css';

const MainNavigation = () => {
  const authCtx = useContext(AuthContext);

  const isLoggedIn = authCtx.isLoggedIn;

  const logoutHandler = () => {
    authCtx.logout();
  }
  //const isLoggedin = authCtx.isLoggedIn;


  return (
    <header className={classes.header}>
      <Link to='/'>
        <div className={classes.logo}>Medium Clone App</div>
      </Link>
      <nav>
        <ul>
          {!isLoggedIn && (
            <li>
              <Link to='/auth'>Login</Link>
            </li>
          )}

          {isLoggedIn && (
            <li>
              <Link to='/profile'>Create Blog</Link>
            </li>
          )}

          {isLoggedIn && (
            <li>
              <Link to='/profile'>My Blog</Link>
            </li>
          )}

          {isLoggedIn && (
            <li>
              <button onClick={logoutHandler}>Logout</button>
            </li>
          )}
        </ul>
      </nav>
    </header>
  );
};

export default MainNavigation;
