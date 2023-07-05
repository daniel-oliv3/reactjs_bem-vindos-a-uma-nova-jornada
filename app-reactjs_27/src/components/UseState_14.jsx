import React, { useState } from "react";







// ------- Componente -------
function UseState_14() {

  const [text, setText] = useState("");
  const [nomes, setNomes] = useState([]);

  function inserir(){
    setNomes(prev => [...prev, text]);
    setText('');
  }
  
  return (
    <>
      <h3>Exercício 12 - Input data - Collection</h3>
      <hr/>

      <input type="text" value={text} onChange={(e) => setText(e.target.value)} />
      <button onClick={inserir}>Inserir</button>

      
      <ul>
          {
            nomes.map((data, index) => (
              <li key={index}>{data}</li>
            ))
          }
      </ul>
      
    </>
  );
}

export default UseState_14;
