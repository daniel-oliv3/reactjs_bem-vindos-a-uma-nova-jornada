import React from 'react';
import  "../components/UseState_04.css";
import UseState_04a from './UseState_04a';

function UseState_04() {

    return (
      <>
          <h3>Exercício 02</h3>

          <div className="layout">
            <UseState_04a unidades={1} />
            <UseState_04a unidades={5} />
            <UseState_04a unidades={10}  />
          </div>

      </>
    )
  }
  
export default UseState_04;