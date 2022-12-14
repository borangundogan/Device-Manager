import Body from "../body/Body";
import Header from "../navi/Header";
import React, { useState } from "react";
import { message } from "antd";

function App() {
  const [cards, setCards] = useState([]);
  const [filteredCards, setFilteredCards] = useState([]);
  const [id, setId] = useState(0);

  function handleChange(newValue) {
    setCards((oldCards) => [...oldCards, newValue]);
  }

  function handleId() {
    setId((oldId) => oldId + 1);
  }

  function handleFilterChange(name) {
    setFilteredCards(
      cards.filter((card) =>
        name.length === 0 ? null : card.name.includes(name)
      )
    );
  }

  function handleFilterChangeForm(form) {
    setFilteredCards(cards.filter((card) => card.form.includes(form)));
  }

  function handleDeletedChange(id) {
    setCards(cards.filter((card) => card.id !== id));
    setFilteredCards(filteredCards.filter((card) => card.id !== id));
    message.warning("Device Deleted!", 1);
  }

  return (
    <div>
      <Header
        updateCards={handleChange}
        handleFilterChange={handleFilterChange}
        handleId={handleId}
        handleFilterChangeForm={handleFilterChangeForm}
        id={id}
      />
      <Body
        cards={cards}
        filteredCards={filteredCards}
        deletedCards={handleDeletedChange}
      />
    </div>
  );
}

export default App;