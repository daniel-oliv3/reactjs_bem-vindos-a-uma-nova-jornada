import React from "react";
import { useState } from "react";




// ------- Componente -------
function UseState_08() {

    const tmp = {
      nome: '',
      apelido: '',
      cidade: '',
      email: ''
    };

  const [cliente, setCliente] = useState(tmp);

  return (
    <>
      <h3>Exercício 07</h3>
      <hr/>

      <ul>
        <li>Nome: {cliente.nome}</li>
        <li>Apelido: {cliente.apelido}</li>
        <li>Cidade: {cliente.cidade}</li>
        <li>Email: {cliente.email}</li>
      </ul>

      
      <button onClick={() => {
        const c = {...cliente}
        c.nome = "Daniel";
        setCliente(c);
      }}>Nome</button>

      <button onClick={() => {
        const c = {...cliente}
        c.apelido = "Oliveira";
        setCliente(c);
      }}>Apelido</button>

      <button onClick={() => {
        const c = {...cliente}
        c.cidade = "Manaus";
        setCliente(c);
      }}>Cidade</button>

      <button onClick={() => {
        const c = {...cliente}
        c.email = "danielsapup3@gmail.com";
        setCliente(c);
      }}>Email</button>


    </>
  );
}

export default UseState_08;
