import { useState } from "react";




function UseStates_01() {

    const [valor, setValor] = useState(0);

    function aumentar(){
        setValor(v => v +1);
    }

    function diminuir(){
        setValor(v => v -1);
    }

    return (
      <>
        <h3>UseStates</h3>
        <p>Valor: {valor}</p>
        <button onClick={aumentar}>Aumentar</button>
        <button onClick={diminuir}>Diminuir</button>
      </>
    )
  }
  
  export default UseStates_01;
  