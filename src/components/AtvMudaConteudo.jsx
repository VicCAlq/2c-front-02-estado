/*
[ATIVIDADE MUDA CONTEÚDO]

Crie e exporte por padrão um componente chamado "AtvMudaConteudo" que não recebe nenhum argumento. 
Este componente deve exibir uma <div> com dois <button> na horizontal, e abaixo destes dois botões mais uma <div>. 
Ao clicar no primeiro <button>, a <div> de baixo deverá exibir um <p> com o conteúdo "Página em construção". 
Ao clicar no segundo <button>, o conteúdo dessa <div> deve ser substituído por três <div> dispostas lado a lado, 
onde cada uma destas <divs> deve ter o tamanho de 200px de altura por 200px de largura, 
a da esquerda deve ter a cor "purple", a do meio a cor "teal" e a da direita a cor "orange".
*/

import { useState } from 'react'

export default function AtvMudaConteudo() {
    const [botaoSel, defBotaoSel] = useState(0)

    return (
        <div>
            <button onClick={ () => defBotaoSel(1) }>1</button>
            <button onClick={ () => defBotaoSel(2) }>2</button>
            <div id="div-conteudo">
                { botaoSel == 1 ? <p>Página em construção</p> 
                : (botaoSel == 2 ? (
                    <>
                    <div id="div-filha-esquerda" className="div-filha"></div>
                    <div id="div-filha-meio" className="div-filha"></div>
                    <div id="div-filha-direita" className="div-filha"></div>
                    </>
                ) : "") }
            </div>
        </div>
    )
}
