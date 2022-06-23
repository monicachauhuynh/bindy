import styled from "styled-components";
export const DoneButton = styled.div`
  width: 193px;
  border-radius: 5px;
  background: #3d1779;
  font-family: DM Sans;
  font-size: 32px;
  font-weight: 700;
  line-height: 88px;
  letter-spacing: 0em;
  text-align: center;
  color: #fff;
  margin- &:hover {
    background: #adecc1 !important;
    color: #3e4347 !important;
    border: 2px solid #3e4347 !important;
  }
`;

export const Footer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 15px;
`;

export const CardList = styled.div`
  height: 75vh;
  overflow-y: scroll;
`;
