import React from "react";
import styled from "styled-components";
export default () => {
  const MenuItem = styled.li`
    list-style: none;
  `;
  const Menu = styled.nav`
    display: flex;
    gap: 2em;
    font-size: 18px;
  `;

  const NavLink = styled.a`
    color: black;
    font-family: DM Sans;
  `;

  return (
    <Menu>
      <MenuItem>
        <NavLink href="/">home</NavLink>
      </MenuItem>
      <MenuItem>
        <NavLink href="#">features</NavLink>
      </MenuItem>
      <MenuItem>
        <NavLink href="#">team</NavLink>
      </MenuItem>
      <MenuItem>
        <NavLink href="#">faps</NavLink>
      </MenuItem>
    </Menu>
  );
};
