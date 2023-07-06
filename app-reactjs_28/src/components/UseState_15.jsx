import React, { useState } from "react";







// ------- Componente -------
function UseState_15() {

  const [count, setCount] = useState(0);

  const handleClick = () => {
    setCount(prevCount => prevCount + 1);
  };

  console.log('Component rendered');
 
  return (
    <>
      <h3>Exercício 13 - Introdução ao UseRef</h3>
      <hr/>

      <p>Count: {count}</p>
      <button onClick={handleClick}>Incrementar</button>

    </>
  );
}

export default UseState_15;
