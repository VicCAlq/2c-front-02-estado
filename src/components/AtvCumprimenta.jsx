/*
[ATIVIDADE CUMPRIMENTA]

Crie e exporte por padrão um componente chamado "AtvCumprimenta". Este componente não recebe nenhum argumento. 
Ele deve retornar uma <div>, onde dentro dela haverá um <p> com o conteúdo "Olá, qual seu nome?". 
Abaixo deste <p> deve haver um <input> onde o usuário poderá digitar seu nome. 
Ao lado deste <input> deve haver um <button>, que ao ser apertado vai fazer um <p> ser exibido abaixo 
com o texto "É um prazer lhe conhecer, [NOME]", onde [NOME] deve ser igual ao texto que o usuário digitou no <input>.

Ordem visual dos elementos:

_________________________________
|       Olá, qual seu nome?     |
|                               |
|  ________________  ________   |
| | Nome aqui     | | Salvar |  |
| ----------------  ---------   |
|                               |
| É um prazer lhe conhecer...   |
|_______________________________|
*/

import { useState } from 'react';

export default function AtvCumprimenta() {
  const [nome, setNome] = useState('');
  const [nomeSalvo, setNomeSalvo] = useState('');

  function handleSalvar() {
    setNomeSalvo(nome.trim());
  }

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
      <p>Olá, qual seu nome?</p>
      <div style={{ display: 'flex', gap: 8, alignItems: 'center' }}>
        <input
          type="text"
          value={nome}
          onChange={(event) => setNome(event.target.value)}
          placeholder="Nome aqui"
          style={{ flex: 1, padding: '8px 12px' }}
        />
        <button type="button" onClick={handleSalvar} style={{ padding: '8px 16px' }}>
          Salvar
        </button>
      </div>
      {nomeSalvo && (
        <p>É um prazer lhe conhecer, {nomeSalvo}</p>
      )}
    </div>
  );
}
