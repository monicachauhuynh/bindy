import React, { useState } from "react";
import { DoneButton, Footer, CardList, Header } from "./style";
import { Container } from "semantic-ui-react";
import MatchCard from "./components/MatchCard";

const mockData = [
  { name: "Bob 1", distance: "12 km away", keywords: ["dog", "cat"], id: "1" },
  { name: "Two", distance: "12 km away", keywords: ["dog", "cat"], id: "2" },
  { name: "Three", distance: "12 km away", keywords: ["dog", "cat"], id: "3" },
];

const Questions = () => {
  const [items, setItems] = useState([]);

  const removeItem = (item) => {
    setItems((prevState) => prevState.filter((prevItem) => prevItem !== item));
  };

  const handleSelectCard = (card) => {
    console.log(card);
    setItems([...items, card]);
    console.log(items);
  };

  const handleDeselectCard = (card) => {
    removeItem(card);
  };

  return (
    <Header>
      <h1>Select the matches that you want to keep in contact </h1>
      <hr />
      <CardList>
        {mockData &&
          mockData.map((card) => (
            <MatchCard
              name={card.name}
              // handleAddItem={handleAddItem}
              onSelect={handleSelectCard}
              onDeselect={handleDeselectCard}
            />
          ))}
      </CardList>
      <Footer>
        <h1>
          {items.length}/{mockData.length} selected
        </h1>
        <DoneButton>DONE</DoneButton>
      </Footer>
    </Header>
  );
};

export default Questions;
