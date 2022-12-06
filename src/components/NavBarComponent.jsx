import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import { NavBar } from './StyleComponent';

const NavBarComponent = () => {
  return (
    <>
      <NavBar>
        <ul>
          <li>
            <NavLink
              to='/'
              className={({ isActive }) => (isActive ? 'active' : '')}
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to='/user'>User</NavLink>
          </li>
        </ul>
      </NavBar>
      <Outlet />
    </>
  );
};

export default NavBarComponent;
