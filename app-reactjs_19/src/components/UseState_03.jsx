import { useState } from "react";


function UseState_03() {
  

  const [valor1, setValor1] = useState(1);
  const [valor2, setValor2] = useState(2);

  //função que aumenta 1 unidade
  function aumentar1(){
    setValor1(v => v +1);
  }

  //função que diminui 1 unidade
  function diminuir1(){
    setValor1(v => v -1);
  }

  //----------------------------

  //função que aumenta 1 unidade
  function aumentar2(){
    setValor2(v => v +1);
  }

  //função que diminui 1 unidade
  function diminuir2(){
    setValor2(v => v -1);
  }

    return (
      <>
        <h1>UseState - Exercício 1</h1>
        
        <p>Valor Um: {valor1}</p>
        <button onClick={aumentar1}>+</button>
        <button onClick={diminuir1}>-</button>

        <hr/>

        <p>Valor Dois: {valor2}</p>
        <button onClick={aumentar2}>+</button>
        <button onClick={diminuir2}>-</button>

        <hr/>

        <p>O resultado de {valor1} x {valor2} = {valor1 * valor2}</p>
      </>
    )
  }
  
  export default UseState_03;