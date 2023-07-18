import React from "react";
import { useState } from "react";

import UseState_07a from "./UseState_07a";


// ------- Componente Pai -------
function UseState_07() {
  const [valor, setValor] = useState([0, 0, 0]);

  function atualizar(indice, unidade){
    //buscar o array
    const tmp = [...valor];
  
    //alterar o array
    tmp[indice] = tmp[indice] + unidade;
  
    //atualizar o state
    setValor(tmp);

  }

  //Função decrementa (1)
  function decValor1() {
    atualizar(0, -1);
  }

  //Função incrementa (1)
  function incValor1() {
    atualizar(0, 1);
  }

  // -------------------------------

  //Função decrementa (2)
  function decValor2() {
    atualizar(1, -1);
  }

  //Função incrementa (2)
  function incValor2() {
    atualizar(1, 1);
  }

  // -------------------------------

  //Função decrementa (3)
  function decValor3() {
    atualizar(2, -1);
  }

  //Função incrementa (3)
  function incValor3() {
    atualizar(2, 1);
  }



  return (
    <>
      <h3>Exercício 05</h3>

      {/* Apresentação do resultado*/}
    

      <ul>
        <li>{valor[0]}</li>
        <li>{valor[1]}</li>
        <li>{valor[2]}</li>
      </ul>

      <hr />
      <UseState_07a funcaoDec={decValor1} funcaoInc={incValor1} />
      <hr />
      <UseState_07a funcaoDec={decValor2} funcaoInc={incValor2} />
      <hr />
      <UseState_07a funcaoDec={decValor3} funcaoInc={incValor3} />

    </>
  );
}

export default UseState_07;
