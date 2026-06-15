/*
[ATIVIDADE TELEFONE SEM FIO]

Crie e exporte por padrão um componente chamado "AtvTelefoneSemFio" que não recebe argumentos.
Este componente deve retornar uma <div> com dois <button> lado a lado, e uma <div> abaixo dos botões.
Cada <button> ao ser clicado, deve inserir na <div> abaixo um <p> e um <input>, 
e substituir o conteúdo anterior dessa <div> de baixo dos botões.
O texto digitado no <input> ativado por um <button> deve ser exibido no <p> do outro <button>, e vice-versa.
*/

import { useState } from 'react';

export default function AtvTelefoneSemFio() {
  const [activeButton, setActiveButton] = useState(null);
  const [textoBotao1, setTextoBotao1] = useState('');
  const [textoBotao2, setTextoBotao2] = useState('');

  function handleButtonClick(buttonId) {
    setActiveButton(buttonId);
  }

  function handleChange(event) {
    const value = event.target.value;
    if (activeButton === 1) {
      setTextoBotao1(value);
    } else if (activeButton === 2) {
      setTextoBotao2(value);
    }
  }

  const displayText = activeButton === 1 ? textoBotao2 : activeButton === 2 ? textoBotao1 : '';
  const inputValue = activeButton === 1 ? textoBotao1 : activeButton === 2 ? textoBotao2 : '';

  return (
    <div>
      <div style={{ display: 'flex', gap: 8 }}>
        <button type="button" onClick={() => handleButtonClick(1)}>
          Botão 1
        </button>
        <button type="button" onClick={() => handleButtonClick(2)}>
          Botão 2
        </button>
      </div>
      <div style={{ marginTop: 16 }}>
        {activeButton && (
          <div>
            <p>{displayText}</p>
            <input
              type="text"
              value={inputValue}
              onChange={handleChange}
              placeholder="Digite aqui"
            />
          </div>
        )}
      </div>
    </div>
  );
}
