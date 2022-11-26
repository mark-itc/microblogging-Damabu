import React from "react";
import { NavLink, Outlet } from "react-router-dom";
import styled from "styled-components";

const NavBarComponent = () => {
  return (
    <>
      <NavBar>
        <ul>
          <li>
            <NavLink
              to="/"
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/user">User</NavLink>
          </li>
        </ul>
      </NavBar>
      <Outlet />
    </>
  );
};

export default NavBarComponent;

const NavBar = styled.div`
  width: 1076px;
  height: 58px;
  background-color: #343a40;
  border-radius: 6px;
  display: flex;
  align-items: center;
  padding-left: 36px;

  ul {
    display: flex;
    align-items: center;
    gap: 20px;
    list-style: none;

    .active {
      color: rgba(255, 255, 255, 0.5);
    }

    li {
      a {
        text-decoration: none;
        color: white;
      }
    }
  }
`;
