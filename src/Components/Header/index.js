import React from "react";
import Logo from "./Logo";
import Menu from "./Menu";
import styled from "styled-components";

const NavBar = styled.div`
  display: flex;
  align-items: center;
  justify-content: start;
  padding: 20px;
`;

const Header1 = () => {
  return (
    <NavBar>
      <Logo />
      <Menu />
    </NavBar>
  );
};

export default Header1;
