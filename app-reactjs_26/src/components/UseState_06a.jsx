import React from "react";

//Componente filho 1
function UseState_06a({funcaoDec, funcaoInc}) {
  return (
    <>
      <button onClick={funcaoDec}>-</button>
      <button onClick={funcaoInc}>+</button>
    </>
  );
}

export default UseState_06a;
