/*
[ATIVIDADE TELEFONE SEM FIO]

Crie e exporte por padrão um componente chamado "AtvTelefoneSemFio" que não recebe argumentos.
Este componente deve retornar uma <div> com dois <button> lado a lado, e uma <div> abaixo dos botões.
Cada <button> ao ser clicado, deve inserir na <div> abaixo um <p> e um <input>, 
e substituir o conteúdo anterior dessa <div> de baixo dos botões.
O texto digitado no <input> ativado por um <button> deve ser exibido no <p> do outro <button>, e vice-versa.
*/

import { useState } from "react";

const style = {
    div: {
        backgroundColor: "#303540",
        borderRadius: '10px',
        padding: "10px",
        margin: "10px",
        gap: "10px",
    },
    input: {
        gap: '5px',
        height: '40px',
        width: '200px',
        borderRadius: '25px',
        display: 'flex',
        marginLeft: '460px',
        textAlign: 'center',
        fontSize: '20px'
    },
    p: {
        fontSize: '26px',
        color: '#eee'
    },
    button1: {
        borderRadius: "5px",
        backgroundColor: "#505560",
        padding: "10px",
        margin: "10px",
        fontSize: '16px',
        fontWeight: '500',
        marginLeft: '470px'
    },
    button2: {
        borderRadius: "5px",
        backgroundColor: "#505560",
        padding: "10px",
        margin: "10px",
        fontSize: '16px',
        fontWeight: '500',
    }
}

export default function AtvTelefoneSemFio() {
    const [ativo, setAtivo] = useState(1);
    const [texto1, setTexto1] = useState("");
    const [texto2, setTexto2] = useState("");

    return (
        <div style={style.div}>
            <div style={{ display: "flex", gap: "1px" }}>
                <button style={style.button1} onClick={() => setAtivo(1)}>
                    Botão 1
                </button>

                <button style={style.button2} onClick={() => setAtivo(2)}>
                    Botão 2
                </button>
            </div>

            <div style={{ marginTop: "20px" }}>
                {ativo === 1 && (
                    <>
                        <p style={style.p}>{texto2}</p>

                        <input
                            type="text"
                            value={texto1}
                            onChange={(e) => setTexto1(e.target.value)}
                            style={style.input}
                        />
                    </>
                )}

                {ativo === 2 && (
                    <>
                        <p style={style.p}>{texto1}</p>

                        <input
                            type="text"
                            value={texto2}
                            onChange={(e) => setTexto2(e.target.value)}
                            style={style.input}
                        />
                    </>
                )}
            </div>
        </div>
    );
}