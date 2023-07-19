import React, { useState, useEffect } from 'react';

function UseEffect_17() {
  const [valor, setValor] = useState(0);

  const [nome, setNome] = useState('');

  function incremento(){
    setValor(valor + 1);
  }

  useEffect(() => {
      console.log('Executar apenas no arranque do componente');
  },[]);

  useEffect(() => {
      console.log('Executar apenas na alteração do VALOR');
  },[valor]);

  useEffect(() => {
    console.log('Executar apenas na alteração do NOME');
  },[nome]);

  useEffect(() => {
    console.log('Executar sempre que o VALOR e o NOME sejam alterados');
  },[valor, nome]);


  function definirNome(){
    setNome('Daniel Oliveira');
  }

  


  return (
    <div>
        <h1>useEffect 01</h1>

        <p>Valor: {valor}</p>
        <button onClick={incremento}>Incremento</button>

        <p>Nome: {nome}</p>
        <button onClick={definirNome}>Definir nome</button>

    </div>
  );
}

export default UseEffect_17;