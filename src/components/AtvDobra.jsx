/*
[ATIVIDADE DOBRA]

Crie e exporte por padrão um componente chamado "AtvDobra" que recebe um argumento "numero". 
O componente deve exibir uma <div> contendo um <p>, que vai exibir este número recebido como argumento, 
e um <button>, que ao ser clicado, modifica o valor do número para dobrar o valor dele.
*/
import { useState } from 'react';

export default function AtvDobra({ numero }) {
  const [valor, setValor] = useState(numero);

  function dobrar() {
    setValor((atual) => atual ** 2);
  }

  return (
    <div style={{ textAlign: 'center', margin: 16 }}>
      <p>Valor: {valor}</p>
      <button type="button" onClick={dobrar}>
        Dobrar
      </button>
    </div>
  );
}
