import { useEffect, useState } from "react";



function UseEffect_19() {

    const [paises, setPaises] = useState([]);

    //Buscar os dados da coleção de países em restcountries
    //https://restcountries.com/v3.1/all

    useEffect(() => {
        fetch('https://restcountries.com/v3.1/all')
        .then(response => response.json())
        .then(dados => setPaises(dados))
    }
    , []);
    
    // console.log(paises);
  

  //-----------------------------------------
  return (
    <>
      <h3>UseEffect 03</h3>
      <p>Lista de países</p>

      <ul>
        {paises.map(pais => <li key={pais.cca2}>{pais.name.common}</li>)}
      </ul>
      
    </>
  );
}

export default UseEffect_19;
