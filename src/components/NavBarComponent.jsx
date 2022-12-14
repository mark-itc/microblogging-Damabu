import { onAuthStateChanged } from 'firebase/auth';
import { useState } from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import { auth } from '../firebase/config';
import { NavBar } from './StyleComponent';

const NavBarComponent = () => {
  const [isLogin, setIsLogin] = useState(false);

  onAuthStateChanged(auth, (user) => {
    if (user === null) {
      setIsLogin(false);
    } else {
      setIsLogin(true);
    }
  });

  return (
    <>
      <NavBar>
        <ul>
          <li className='home logged-in'>
            <NavLink
              to='/'
              className={({ isActive }) => (isActive ? 'active' : '')}
            >
              Home
            </NavLink>
          </li>
          {isLogin && (
            <li className='user logged-in'>
              <NavLink to='/user'>User</NavLink>
            </li>
          )}
          {!isLogin && (
            <li className='login logged-out'>
              <NavLink to='/login'>Login</NavLink>
            </li>
          )}
          {isLogin && (
            <li className='logout logged-in'>
              <NavLink to='/Logout'>Logout</NavLink>
            </li>
          )}
          {!isLogin && (
            <li className='singup logged-out'>
              <NavLink to='/Singup'>Singup</NavLink>
            </li>
          )}
        </ul>
      </NavBar>
      <Outlet />
    </>
  );
};

export default NavBarComponent;
