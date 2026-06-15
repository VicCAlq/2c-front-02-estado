/*
[ATIVIDADE DOBRA]

Crie e exporte por padrão um componente chamado "AtvDobra" que recebe um argumento "numero". 
O componente deve exibir uma <div> contendo um <p>, que vai exibir este número recebido como argumento, 
e um <button>, que ao ser clicado, modifica o valor do número para dobrar o valor dele.
*/


import { useState } from 'react';

export default function AtvDobra({ valor }) {
  const [numero, setNumero] = useState(valor);

  function dobrarNumero() {
    setNumero(numero * 2);
  }

  return (
    <div>
      <p>{numero}</p>
      <button onClick={dobrarNumero}>Dobrar</button>
    </div>
  );
}
