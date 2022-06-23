import React, { useState } from "react";
import {
  Box,
  Slider,
  SliderTab,
  ButtonContainer,
  SButton,
  CallerPanel,
  CallerAvatar,
  CallerName,
} from "./style";
import PopupModal from "../PopupModal";
import { Container } from "semantic-ui-react";
import { Icon } from "semantic-ui-react";

import "react-awesome-slider/dist/styles.css";
import { questions } from "./constants";

export default function VoiceChat() {
  const [currentIndex, setCurrentIndex] = useState(1);

  const onTransitionRequest = (props) => {
    setCurrentIndex(props.nextIndex + 1);
  };

  return (
    <Container>
      <Box>
        <SliderTab>Question {currentIndex}/36</SliderTab>
        <Slider bullets={false} onTransitionRequest={onTransitionRequest}>
          {questions &&
            questions.map((question) => (
              <div key={question.key} className="question">
                {question.value}
              </div>
            ))}
        </Slider>
        <ButtonContainer>
          <SButton icon>
            <Icon size="big" name="microphone" />
          </SButton>
          <PopupModal
            closeButton={
              <SButton icon red>
                <Icon size="big" name="phone" />
              </SButton>
            }
          ></PopupModal>

          <SButton icon>
            <Icon size="big" name="volume up" />
          </SButton>
        </ButtonContainer>
        <CallerPanel>
          <CallerAvatar active>
            <img
              src="https://i.pinimg.com/originals/03/e0/1e/03e01e6734540f36f9494af40fd599d9.png"
              alt=""
            />
            <CallerName>Anonymous Donut (You)</CallerName>
          </CallerAvatar>
          <CallerAvatar>
            <img
              src="https://www.nicepng.com/png/detail/37-374645_cupcake-cliparts-transparent-baking-clipart-transparent-background.png"
              alt=""
            />
            <CallerName>Anonymous Cotton Candy</CallerName>
          </CallerAvatar>
        </CallerPanel>
      </Box>
    </Container>
  );
}
