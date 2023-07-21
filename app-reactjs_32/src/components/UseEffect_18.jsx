import { useEffect, useState, useRef } from "react";



function UseEffect_18() {
  const [valor, setValor] = useState(0);
  const renderInicial = useRef(true);

  //função incremento
  function incremento() {
    setValor(valor + 1);
  }

  //useEffect
  useEffect(() => {
    if(renderInicial.current){
        renderInicial.current = false;
    } else {
        console.log("Código executado apenas quando o VALOR é alterado!");
    }
  }, [valor]);

  //-----------------------------------------
  return (
    <>
      <h3>UseEffect 02</h3>
      <button onClick={incremento}>Incremento</button>
      <h3>{valor}</h3>
    </>
  );
}

export default UseEffect_18;
