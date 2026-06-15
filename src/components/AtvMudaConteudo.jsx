/*
[ATIVIDADE MUDA CONTEÚDO]

Crie e exporte por padrão um componente chamado "AtvMudaConteudo" que não recebe nenhum argumento. 
Este componente deve exibir uma <div> com dois <button> na horizontal, e abaixo destes dois botões mais uma <div>. 
Ao clicar no primeiro <button>, a <div> de baixo deverá exibir um <p> com o conteúdo "Página em construção". 
Ao clicar no segundo <button>, o conteúdo dessa <div> deve ser substituído por três <div> dispostas lado a lado, 
onde cada uma destas <divs> deve ter o tamanho de 200px de altura por 200px de largura, 
a da esquerda deve ter a cor "purple", a do meio a cor "teal" e a da direita a cor "orange".
*/
import { useState } from 'react';

export default function AtvMudaConteudo() {
  const [conteudo, setConteudo] = useState('');

  function mostrarConstrucao() {
    setConteudo('construcao');
  }

  function mostrarBotoes() {
    setConteudo('botoes');
  }

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
      <div style={{ display: 'flex', gap: 8 }}>
        <button type="button" onClick={mostrarConstrucao}>
          Construção
        </button>
        <button type="button" onClick={mostrarBotoes}>
          Três cores
        </button>
      </div>

      <div style={{ minHeight: 220 }}>
        {conteudo === 'construcao' && (
          <p>Página em construção</p>
        )}

        {conteudo === 'botoes' && (
          <div style={{ display: 'flex', gap: 8 }}>
            <div style={{ width: 200, height: 200, backgroundColor: 'purple' }} />
            <div style={{ width: 200, height: 200, backgroundColor: 'teal' }} />
            <div style={{ width: 200, height: 200, backgroundColor: 'orange' }} />
          </div>
        )}
      </div>
    </div>
  );
}
