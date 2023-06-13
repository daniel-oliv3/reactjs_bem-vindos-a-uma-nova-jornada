//Exemplo 2 React Hooks
import { useState } from "react";


export default () => {

  const [valor, setValor] = useState(100);

  function aumentar(){
    setValor(v => v + 1);
  }

  return (
    <>
      <h1>Valor: {valor}</h1>
      <h1>Valor: {valor}</h1>
      <button onClick={aumentar}>Aumentar uma unidade</button>  
    </>
  )
}

























// ------------------------------------------------------------------------------------------
//Exemplo 1
//Função Anônima
// export default () => {

//   let valor = 0;

//   function aumentar(){
//     valor++;
//     document.querySelector("h1").textContent = "Valor: " + valor; //nada haver com react
//     // console.log(valor);
//   }

//   return (
//     <>
//       <h1>Valor: {valor}</h1>
//       <button onClick={aumentar}>Aumentar uma unidade</button>
//       <p>Função Anônima</p>      
//     </>
//   )
// }

