/*
[ATIVIDADE MUDA CONTEÚDO]

Crie e exporte por padrão um componente chamado "AtvMudaConteudo" que não recebe nenhum argumento. 
Este componente deve exibir uma <div> com dois <button> na horizontal, e abaixo destes dois botões mais uma <div>. 
Ao clicar no primeiro <button>, a <div> de baixo deverá exibir um <p> com o conteúdo "Página em construção". 
Ao clicar no segundo <button>, o conteúdo dessa <div> deve ser substituído por três <div> dispostas lado a lado, 
onde cada uma destas <divs> deve ter o tamanho de 200px de altura por 200px de largura, 
a da esquerda deve ter a cor "purple", a do meio a cor "teal" e a da direita a cor "orange".
*/

import { createElement } from "react";
import { useState } from "react";

const style = {
    div: {
        backgroundColor: "#303540",
        borderRadius: '10px',
        padding: "10px",
        margin: "10px",
        gap: "10px",
    },
    p: {
        fontSize: '26px',
        color: '#eee'
    },
    button: {
        borderRadius: "5px",
        backgroundColor: "#505560",
        padding: "10px",
        margin: "10px",
        fontSize: '16px',
        fontWeight: '500',
        marginLeft: '250px'
    }
}

export default function AtvMudaConteudo() {
    const [conteudo, setConteudo] = useState("");

    function mostrarMensagem() {
        setConteudo("mensagem");
    }

    function mostrarCores() {
        setConteudo("cores");
    }

    return (
        <div style={style.div}>
            <div style={{ display: "flex", gap: "10px" }}>
                <button style={style.button} onClick={mostrarMensagem}>
                    Mostrar Mensagem
                </button>

                <button style={style.button} onClick={mostrarCores}>
                    Mostrar Cores
                </button>
            </div>

            <div style={{ marginTop: "40px"}}>
                {conteudo === "mensagem" && (
                    <p style={style.p}>Página em construção</p>
                )}

                {conteudo === "cores" && (
                    <div style={{ display: "flex", gap: "10px", marginLeft: '250px' }}>
                        <div
                            style={{
                                width: "200px",
                                height: "200px",
                                backgroundColor: "purple",
                            }}
                        />

                        <div
                            style={{
                                width: "200px",
                                height: "200px",
                                backgroundColor: "teal",
                            }}
                        />

                        <div
                            style={{
                                width: "200px",
                                height: "200px",
                                backgroundColor: "orange",
                            }}
                        />
                    </div>
                )}
            </div>
        </div>
    );
}