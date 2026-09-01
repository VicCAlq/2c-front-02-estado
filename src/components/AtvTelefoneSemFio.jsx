/*
[ATIVIDADE TELEFONE SEM FIO]

Crie e exporte por padrão um componente chamado "AtvTelefoneSemFio" que não recebe argumentos.
Este componente deve retornar uma <div> com dois <button> lado a lado, e uma <div> abaixo dos botões.
Cada <button> ao ser clicado, deve inserir na <div> abaixo um <p> e um <input>, 
e substituir o conteúdo anterior dessa <div> de baixo dos botões.
O texto digitado no <input> ativado por um <button> deve ser exibido no <p> do outro <button>, e vice-versa.
*/

import { useState } from "react";

function AtvTelefoneSemFio() {
  const [texto1, setTexto1] = useState("");
  const [texto2, setTexto2] = useState("");
  const [ativo, setAtivo] = useState(null);

  return (
    <div>
      <div>
        <button onClick={() => setAtivo(1)}>Botão 1</button>
        <button onClick={() => setAtivo(2)}>Botão 2</button>
      </div>

      <div>
        {ativo === 1 && (
          <>
            <p>{texto2}</p>
            <input
              type="text"
              value={texto1}
              onChange={(e) => setTexto1(e.target.value)}
            />
          </>
        )}

        {ativo === 2 && (
          <>
            <p>{texto1}</p>
            <input
              type="text"
              value={texto2}
              onChange={(e) => setTexto2(e.target.value)}
            />
          </>
        )}
      </div>
    </div>
  );
}

export default AtvTelefoneSemFio;
