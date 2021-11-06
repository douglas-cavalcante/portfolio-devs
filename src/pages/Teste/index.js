/* import React from "react";

class Teste extends React.Component {
  constructor() {
    this.state = {
      amount: 0
    }
  }
}
*/
import { useEffect, useState } from 'react';

const Teste = () => {

  const [cards, setCards] = useState([])

  useEffect(() => {
    async function handleGetCards() {
      const response = await fetch('https://db.ygoprodeck.com/api/v7/cardinfo.php?cardset=metal%20raiders&num=45&offset=0')
      const result = await response.json();
      console.log(result.data)
      setCards(result.data)
    }

    handleGetCards();
  }, [])

  return (
    <>
    <div className="container-cards">
      {cards.map(card => (
        <div className="item-card">
          <img 
           src={card.card_images[0].image_url_small} 
           alt="capa da carta" 
           width="100px"
           height="100px"
           style={{objectFit: 'contain'}}
           />
          <span>{card.name}</span>
        </div>
      ))}
      </div>
    </>
  )
}

export default Teste;