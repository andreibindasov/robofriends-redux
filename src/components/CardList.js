import React, { useState, useEffect, useRef } from "react";
import Card from "./Card";

const CardList = ({ robots }) => {
  console.log("CardList");

  const [cardList, setCardList] = useState(0)
  const cards = useRef("Hello")
  
  useEffect(()=>{
    cards.current=cards.current + '!'
  }, [cardList])

  return (
    
    <div>
      <button onClick={()=>setCardList(cardList+1)}>Click</button>
      <h2>{cardList}</h2>
      <h3>{cards.current} HEY</h3>
      {robots.map((user, i) => {
        return (
          <Card
            key={i}
            id={robots[i].id}
            name={robots[i].name}
            email={robots[i].email}
          />
        );
      })}
    </div>
  );
};

export default CardList;
