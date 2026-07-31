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
        marginLeft: '10px',
        textAlign: 'center',
        fontSize: '20px'
    },
    button: {
        borderRadius: "5px",
        backgroundColor: "#505560",
        padding: "10px",
        margin: "10px",
        fontSize: '16px',
        fontWeight: '500',
        marginLeft: '20px'
    },
    p: {
        fontSize: '26px',
        color: '#eee'  
    }
}

export default function AtvCumprimenta() {
    const [nome, setNome] = useState("");
    const [mostrar, setMostrar] = useState(false);

    function salvarNome() {
        setMostrar(true);
    }

    return (
        <div style={style.div}>
            <p style={style.p}>Olá, qual seu nome?</p>

            <input
                type="text"
                value={nome}
                onChange={(e) => setNome(e.target.value)}
                style={style.input}
            />

            <button style={style.button} onClick={salvarNome}>
                Salvar
            </button>

            {mostrar && (
                <p style={style.p}>É um prazer lhe conhecer, <strong>{nome}</strong></p>
            )}
        </div>
    );
}