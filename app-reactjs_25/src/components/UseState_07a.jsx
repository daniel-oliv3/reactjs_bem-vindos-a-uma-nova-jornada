import React from "react";


//Componente filho 1
function UseState_07a({funcaoDec, funcaoInc}) {
  return (
    <>
      <button onClick={funcaoDec}>-</button>
      <button onClick={funcaoInc}>+</button>
    </>
  );
}

export default UseState_07a;
