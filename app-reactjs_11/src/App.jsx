import React from "react";


import HookState from './components/UseState_01'

export default function App() {

  return (
    <>
      <h1>REORGANIZAÇÃO DO PROJETO E EXEMPLO COM USESTATE</h1>

      <HookState />
      <HookState />
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

