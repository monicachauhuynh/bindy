import styled from "styled-components";

export const Card = styled.div`
  box-shadow: 5px 5px 5px rgba(0, 0, 0, 0.1);
  border-radius: 20px;
  display: flex;
  padding: 20px;
  flex-direction: row;
  position: relative;
  align-items: center;
  border: 1px solid #383838;
  margin: 25px 0;

  background: ${(props) => (props.checked ? "#C4B5F9" : "#fff")};

  &:hover {
    background: ${(props) => (props.checked ? "#C4B5F9" : "#dedede")};
  }
`;

export const MatchAvatar = styled.div`
  height: 189px;
  width: 189px;
  border-radius: 20px;
  background: #fffefecc;
  box-shadow: 5px 5px 5px 0px #0000001a;
  position: relative;
  padding: 15px;
  border: 1px solid #383838;

  img {
    width: 100%;
    border-radius: 20px;
    height: 100%;
  }
`;

export const InfoContainer = styled.div`
  margin: 0 100px 0 50px;
  width: 630px;

  h1 {
    font-family: DM Sans;
    font-size: 40px;
    font-weight: 700;
    letter-spacing: 0em;
    color: #3e4347;
  }

  span {
    font-family: DM Sans;
    font-size: 32px;
    font-style: italic;
    font-weight: 400;
    letter-spacing: 0em;
  }
`;

export const TagsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  margin-top: 20px;
`;

export const SCheckBox = styled.input`
  accent-color: #3d1779;
  transform: scale(2);
  min-width: 36px !important;
  margin-right: 50px;
`;
