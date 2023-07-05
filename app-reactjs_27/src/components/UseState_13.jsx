import React, { useState } from "react";







// ------- Componente -------
function UseState_13() {

  const [text, setText] = useState("");
  // const [text, setText] = useState("Texto inicial");
  
  return (
    <>
      <h3>Exercício 11 - Input data</h3>
      <hr/>

      <input type="text" value={text} onChange={(e) => setText(e.target.value)} />

      <p>{text}</p>
      <h3>{text}</h3>
      <p>O texto inserido é : {text}</p>
      
      
    </>
  );
}

export default UseState_13;
