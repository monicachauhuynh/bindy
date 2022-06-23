import React from "react";
import {
  Card,
  MatchAvatar,
  TagsContainer,
  SCheckBox,
  InfoContainer,
} from "./style";
import KeywordTag from "../KeywordTag";

export default function MatchCard({ onSelect, onDeselect, name }) {
  const [checked, setChecked] = React.useState(false);

  const handleSelect = () => {
    setChecked(!checked);
    if (!checked) {
      onSelect(name);
    } else {
      onDeselect(name);
    }
  };

  return (
    <Card checked={checked} onClick={handleSelect}>
      <MatchAvatar>
        <img
          src="https://i.pinimg.com/originals/03/e0/1e/03e01e6734540f36f9494af40fd599d9.png"
          alt=""
        />
      </MatchAvatar>
      <InfoContainer>
        <h1>{name}</h1>
        <span>25,5 km away</span>
        <TagsContainer>
          <KeywordTag />
          <KeywordTag />
        </TagsContainer>
      </InfoContainer>
      <SCheckBox
        type="checkbox"
        checked={checked}
        onChange={() => setChecked(!checked)}
      ></SCheckBox>
    </Card>
  );
}
