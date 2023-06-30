import React from "react";
import { useState } from "react";



//Component
function UseState_04a({unidades}) {

    const [valor, setValor] = useState(0);

    //Função decrementar
    function decrementar(){
        setValor(old => old - unidades);
    }

    //Função incrementar
    function incrementar(){
        setValor(old => old + unidades);
    }

    return (
      <>
            <button onClick={decrementar}>-</button>
            <h3>Valor: <strong>{valor}</strong></h3>
            <button onClick={incrementar}>+</button>
      </>
    )
  }


export default UseState_04a;