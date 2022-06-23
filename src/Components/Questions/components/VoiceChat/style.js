import styled from "styled-components";
import AwesomeSlider from "react-awesome-slider";
import { Button } from "semantic-ui-react";

export const Box = styled.div`
  background: rgba(158, 146, 193, 0.4);
  box-shadow: 5px 5px 5px rgba(0, 0, 0, 0.1);
  border-radius: 20px;
  display: flex;
  padding: 90px;
  flex-direction: column;
  position: relative;
  margin-top: 80px;
`;

export const Slider = styled(AwesomeSlider)`
  --slider-transition-duration: 300ms;

  .awssld__content {
    background: rgba(255, 255, 255, 0.5);
    box-shadow: 4px 4px 4px 0px #0000001a;
    border-radius: 15px;
    color: #3e4347;
    font-family: DM Sans;
    font-weight: 500;
    line-height: 60px;
    letter-spacing: 0em;
    text-align: center;
  }

  .awssld__wrapper {
    height: 420px;
    width: 659px;
    border-radius: 15px;
  }

  .question {
    width: 75%;
    font-size: 30px;
    font-weight: 600;
  }
`;

export const SliderTab = styled.div`
  border-radius: 40px;
  box-shadow: 4px 4px 4px 0px #0000001a;
  opacity: 0.95;
  background: #8b5cb4;
  font-family: DM Sans;
  font-size: 36px;
  font-weight: 700;
  line-height: 38px;
  letter-spacing: 0em;
  text-align: center;
  color: #fff;
  padding: 23px 20px;
  /* width: 280px; */
  position: absolute;
  top: 30px;
  left: 270px;
  z-index: 999;
`;

export const ButtonContainer = styled.div`
  margin-top: 74px;
  width: 600px;
  display: flex;
  justify-content: center;
  & > * {
    margin-left: 50px !important;
  }
`;

export const SButton = styled(Button)`
  height: 111px;
  width: 111px;
  opacity: ${(props) => (props.red ? "95%" : "60%")} !important;
  border-radius: 40px !important;
  box-shadow: 4px 4px 3px 0px #00000033 !important;
  background: ${(props) => (props.red ? "#D75732" : "#190f24")} !important;

  &:hover {
    background: ${(props) => (props.red ? "#87351e" : "#4d306e")} !important;
  }

  .icon {
    color: #fff !important;
  }
`;

export const CallerPanel = styled.div`
  position: absolute;
  height: 100%;
  right: 0;
  top: 0;
  width: 28%;
  border-radius: 20px;
  background: #f6f3ffe5;
  opacity: 90%;
  padding: 55px 0px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
`;

export const CallerAvatar = styled.div`
  height: 230px;
  width: 230px;
  border-radius: 20px;
  background: #fffefecc;
  box-shadow: 5px 5px 5px 0px #0000001a;
  position: relative;
  padding: 20px;

  ${({ active }) =>
    active &&
    `
    &::after {
    content: "";
    display: block;
    height: 230px;
    width: 230px;
    outline: 11px solid #85ceb4;
    outline-offset: 0.6rem;
    filter: blur(2px);
    position: absolute;
    top: 0px;
    left: 0px;
    border-radius: 20px;
  }
  `}

  img {
    width: 100%;
    border-radius: 20px;
    height: 100%;
  }
`;

export const CallerName = styled.div`
  border-radius: 14px;
  position: absolute;
  bottom: 10px;
  left: 10px;
  width: 93%;
  padding: 10px 15px;
  background: #160e23e5;
  opacity: 80%;
  color: #fffefe;
  font-family: DM Sans;
  font-size: 14px;
  font-weight: 500;
  letter-spacing: 0em;
  text-align: center;
`;
