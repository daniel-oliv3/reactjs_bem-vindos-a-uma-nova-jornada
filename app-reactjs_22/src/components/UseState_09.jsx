import React, { useState } from "react";





// ------- Componente -------
function UseState_09() {

  const [login, setLogin] = useState(false);
  const [btnText, setBtnText] = useState('Login');

  return (
    <>
      <h3>Exercício 08 - Conditional rendering - Fake Login</h3>
      <hr/>


      <button onClick={() => {
        setLogin(!login);
        setBtnText(login ? 'Login' : 'Logout');
      }}>{btnText}</button>


      {login && <p>Usuário logado...</p>}

    </>
  );
}

export default UseState_09;
