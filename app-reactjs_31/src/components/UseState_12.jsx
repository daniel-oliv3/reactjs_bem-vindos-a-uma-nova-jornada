import React, { useState } from "react";
import CompA from '../components/UseState_12a';
import CompB from '../components/UseState_12b';




// ------- Componente -------
function UseState_12() {

  const [state, setState] = useState(true);
  
  return (
    <>
      <h3>Exercício 11 - Conditional rendering - Alternate between components</h3>
      <hr/>

      <button onClick={() => setState(!state)}>Alternar entre componentes</button>

      {state ? <CompA /> : <CompB />}

      
      
    </>
  );
}

export default UseState_12;
