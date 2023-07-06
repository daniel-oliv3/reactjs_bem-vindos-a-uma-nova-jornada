import React, { useState } from "react";
import '../components/UseState_11.css';





// ------- Componente -------
function UseState_11() {

  const [state, setState] = useState(true);
  const class1 = "classUm";
  const class2 = "classDois";

  return (
    <>
      <h3>Exercício 10 - Conditional rendering - Change CSS class</h3>
      <hr/>

      <button onClick={() => setState(!state) }>Alterar Parágrafo</button>
      
      <p className={`paragrafo ${state ? class1 : class2}`}>Texto que vai ter seu aspecto alterado!</p>

    </>
  );
}

export default UseState_11;
