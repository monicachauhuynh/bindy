import styled from 'styled-components';
import logo from '../../Assets/bindy-logo.png';

const ImgLogo = styled.img`
  height: 32px;
  padding-right: 32px;
`;

function Logo() {
  return <ImgLogo src={logo} alt="Blindy Logo" />;
}

export default Logo;
