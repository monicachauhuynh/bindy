import React from "react";
import { Box } from "./style";
import { Container, Button, Header } from "semantic-ui-react";
import { ReactComponent as QuizImg } from "../../Assets/quiz_img.svg";

const Questions = () => {
  return (
    <Container>
      <Box>
        <Header className="box-title">36 Questions Game</Header>
        <p>
          This text will explain how the game works. Lorem ipsum dolor sit amet,
          consectetur adipiscing elit. Nunc, nullam ut suscipit diam tristique
          egestas amet. Sit. Lorem ipsum dolor sit amet, consectetur adipiscing
          elit. Nunc, nullam ut suscipit diam tristique egestas amet. Nunc,
          nullam ut suscipit.
        </p>
        <QuizImg />
        <Button className="start-btn">START</Button>
      </Box>
    </Container>
  );
};

export default Questions;
