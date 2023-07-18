import { useState } from "react"


function UseState_02() {
  
    const [valor, setValor] = useState(0);

    //função que aumentar em 1 unidade
    function aumentar(){
        setValor(v => v +1);
    }

    //função que diminuir em 1 unidade
    function diminuir(){
        setValor(v => v -1);
    }

    //função diminuir em 10 uninades
    function diminuir_valor(a){
      setValor(v => v - a);
    }

    return (
      <>
        <h1>+ Ou -</h1>

        <p>Valor: {valor}</p>
        <button onClick={aumentar}>Aumentar</button>
        <button onClick={diminuir}>Diminuir</button>

        <button onClick={() => diminuir_valor(10)}>Diminuir+</button>
      </>
    )
  }
  
  export default UseState_02;