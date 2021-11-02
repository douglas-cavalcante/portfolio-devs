/* import React from "react";

class Teste extends React.Component {
  constructor() {
    this.state = {
      amount: 0
    }
  }
}
*/
import { useState } from 'react';

const Teste = () => {

  const [amount, setAmount] = useState(0)
  const [amountTwo, setAmountTwo] = useState(10)

  return (
    <>
      <div>{amount}</div>
      <button onClick={() => setAmount(amount + 1)}>Adicionar</button>
      <hr />
      <div>{amountTwo}</div>
      <button onClick={() => setAmountTwo(amountTwo + 1)}>Adicionar</button>
    </>
  )
}

export default Teste;