import { useState } from "react";

function UseState_01() {

    const [valor, setValor] = useState(0);

    function aumentar(){
        setValor(v => v +1);
    }

    function diminuir(){
        setValor(v => v -1);
    }

    return (
      <>
        <h1>Aumenta e Decrementa Valores</h1>

        <p>Valor: {valor}</p>
        <button onClick={aumentar}>Aumentar</button>
        <button onClick={diminuir}>Diminuir</button>
      </>
    )
  }
  
  export default UseState_01;