import React from "react";
import { Box } from "./style";
import { Container, Button, Header } from "semantic-ui-react";
import { ReactComponent as QuizImg } from "../../Assets/quiz_img.svg";
import { Link } from "react-router-dom";

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
        <Link to="/questions/call">
          <Button className="start-btn">START</Button>
        </Link>
      </Box>
    </Container>
  );
};

export default Questions;
