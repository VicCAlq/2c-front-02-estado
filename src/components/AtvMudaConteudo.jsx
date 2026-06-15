/*
[ATIVIDADE MUDA CONTEÚDO]

Crie e exporte por padrão um componente chamado "AtvMudaConteudo" que não recebe nenhum argumento. 
Este componente deve exibir uma <div> com dois <button> na horizontal, e abaixo destes dois botões mais uma <div>. 
Ao clicar no primeiro <button>, a <div> de baixo deverá exibir um <p> com o conteúdo "Página em construção". 
Ao clicar no segundo <button>, o conteúdo dessa <div> deve ser substituído por três <div> dispostas lado a lado, 
onde cada uma destas <divs> deve ter o tamanho de 200px de altura por 200px de largura, 
a da esquerda deve ter a cor "purple", a do meio a cor "teal" e a da direita a cor "orange".
*/

import { useState } from "react";

export default function AtvMudaConteudo() {

    const style = {
        container: {
            height: '200px',
            width: '200px',
        },

        purple: {
            backgroundColor: 'purple',
        },

        teal: {
            backgroundColor: 'teal',
        },

        orange: {
            backgroundColor: 'orange',
        },
        box: {
            display: 'flex',
        }
    }

    const [conteudo, setConteudo] = useState('');
    
    return (
        <div>
            <button onClick={() => setConteudo('Página em construção')}>BTN 1111111111</button>
            <button onClick={() => setConteudo('quadrados')}>BTN 2222222222</button>

            <div>
                {conteudo === 'Página em construção' ? <p>{conteudo}</p> : null}
                {conteudo === 'quadrados' ? (
                    <>
                        <div className="container" style={style.box}>
                            <div className="left" style={{ ...style.container, ...style.purple }}>AAAAAAAAAAA</div>
                            <div className="mid" style={{ ...style.container, ...style.teal }}>BBBBBBBBBBBB</div>
                            <div className="right" style={{ ...style.container, ...style.orange }}>CCCCCCCCCC</div>
                        </div>
                    </>
                ) : null}
            </div>
        </div>  

    );
}
