import React, { useState, useEffect } from 'react';

function UseEffect_17() {
  const [valor, setValor] = useState(0);

  function incremento(){
    setValor(valor + 1);
  }

  useEffect(() => {
      console.log('Componente Renderizado');

  },[]);


  return (
    <div>
        <h1>useEffect 01</h1>

        <p>Valor: {valor}</p>

        <button onClick={incremento}>Incremento</button>
    </div>
  );
}

export default UseEffect_17;