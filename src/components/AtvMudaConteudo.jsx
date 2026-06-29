/*
[ATIVIDADE MUDA CONTEÚDO]

Crie e exporte por padrão um componente chamado "AtvMudaConteudo" que não recebe nenhum argumento. 
Este componente deve exibir uma <div> com dois <button> na horizontal, e abaixo destes dois botões mais uma <div>. 
Ao clicar no primeiro <button>, a <div> de baixo deverá exibir um <p> com o conteúdo "Página em construção". 
Ao clicar no segundo <button>, o conteúdo dessa <div> deve ser substituído por três <div> dispostas lado a lado, 
onde cada uma destas <divs> deve ter o tamanho de 200px de altura por 200px de largura, 
a da esquerda deve ter a cor "purple", a do meio a cor "teal" e a da direita a cor "orange".
*/
import { useState } from "react"

export default function AtvMudaConteudo() {
    const [texto, setTexto] = useState(<></>)
    const style = {
        esquerda: {
            width: "200px",
            height: "200px",
            backgroundColor: "purple"
        },
        meio: {
            width: "200px",
            height: "200px",
            backgroundColor: "teal"
        },
        direita: {
            width: "200px",
            height: "200px",
            backgroundColor: "orange"
        },
        botao: {
            borderRadius: "5px",
            backgroundColor: "#505560",
            padding: "10px",
            margin: "10px",
        },
        texto: {
            color: "#eee",
            fontSize: "32px",
        }
    }
    return (
        <div>
            <button style={style.botao} onClick={() => setTexto(<p style={style.texto}>"Página em construção"</p>)}> Botão 1 </button>
            <button style={style.botao} onClick={() => setTexto(
                <div style={{ display: "flex", flexDirection: "row" }}>
                    <div style={style.esquerda}></div>
                    <div style={style.meio}></div>
                    <div style={style.direita}></div>
                </div>
            )}> Botão 2 </button>
            <div>
                {texto}
            </div>
        </div>
    )
}
