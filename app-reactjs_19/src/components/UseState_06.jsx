import React from "react";
import { useState } from "react";

import UseState_06a from "./UseState_06a";


// ------- Componente Pai -------
function UseState_06() {
  const [valor1, setValor1] = useState(0);
  const [valor2, setValor2] = useState(0);

  //Função decrementa 5 em 5
  function decValor1() {
    setValor1((old) => old - 5);
  }

  //Função incrementa 5 em 5
  function incValor1() {
    setValor1((old) => old + 5);
  }

  //Função decrementa 10 em 10
  function decValor2() {
    setValor2((old) => old - 10);
  }

  //Função incrementa 10 em 10
  function incValor2() {
    setValor2((old) => old + 10);
  }

  return (
    <>
      <h3>Exercício 04</h3>

      {/* Apresentação do resultado*/}
      <p>Adição de {valor1} + {valor2} = <strong>{valor1 + valor2}</strong> </p>


      <hr />
      <UseState_06a funcaoDec={decValor1} funcaoInc={incValor1} />
      <hr />
      <UseState_06a funcaoDec={decValor2} funcaoInc={incValor2} />


    </>
  );
}

export default UseState_06;
