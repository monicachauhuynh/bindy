import styled from "styled-components";

export const Box = styled.div`
  /* height: 657px;
  width: 1160px; */
  background: rgba(158, 146, 193, 0.4);
  box-shadow: 5px 5px 5px rgba(0, 0, 0, 0.1);
  border-radius: 20px;
  display: flex;
  padding: 90px;
  flex-direction: column;
  align-items: center;
  position: relative;
  margin-top: 80px;

  .box-title {
    border-radius: 15px;
    position: absolute;
    top: -50px;
    opacity: 0.95;
    border: 3px solid #766771;
    box-shadow: 4px 4px 4px 0px #0000001a;
    background: #fffefe;
    z-index: 999;

    font-family: DM Sans;
    font-size: 72px !important;
    font-style: normal;
    font-weight: 700;
    text-align: center;
    padding: 20px 60px;
    width: 80%;
  }

  p {
    font-family: DM Sans;
    font-size: 24px;
    font-style: normal;
    font-weight: 500;
    line-height: 49px;
    letter-spacing: 0em;
    text-align: left;
    opacity: 1 !important;
  }

  svg {
    width: 30%;
    margin-left: -400px !important;
    margin-top: 50px !important;
  }

  .start-btn {
    position: absolute;
    bottom: 80px;
    right: 80px;
    width: 176px;
    border-radius: 5px;
    font-family: DM Sans;
    font-size: 20px !important;
    font-style: normal;
    font-weight: 400 !important;
    letter-spacing: 0em;
    text-align: center !important;
    color: #fffefe !important;
    background: #3e4347 !important;

    &:hover {
      background: #adecc1 !important;
      color: #3e4347 !important;
      border: 2px solid #3e4347 !important;
    }
  }
`;
