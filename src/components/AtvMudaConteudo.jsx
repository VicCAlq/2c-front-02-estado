/*
[ATIVIDADE MUDA CONTEÚDO]

Crie e exporte por padrão um componente chamado "AtvMudaConteudo" que não recebe nenhum argumento. 
Este componente deve exibir uma <div> com dois <button> na horizontal, e abaixo destes dois botões mais uma <div>. 
Ao clicar no primeiro <button>, a <div> de baixo deverá exibir um <p> com o conteúdo "Página em construção". 
Ao clicar no segundo <button>, o conteúdo dessa <div> deve ser substituído por três <div> dispostas lado a lado, 
onde cada uma destas <divs> deve ter o tamanho de 200px de altura por 200px de largura, 
a da esquerda deve ter a cor "purple", a do meio a cor "teal" e a da direita a cor "orange".
*/

import { createElement } from "react"

export default function AtvMudaConteudo(){
    const [conteudo, setConteudo] = useState("");

    function mostrarMensagem() {
        setConteudo("mensagem");
    }

    function mostrarCores() {
        setConteudo("cores");
    }

    return(
<>
    <div>
        <div style={{ display: "flex", gap: "10px" }}>
            <button onClick={mostrarMensagem}>
            Mostrar Mensagem
            </button>

            <button onClick={mostrarCores}>
            Mostrar Cores
            </button>
        </div>

        <div style={{ marginTop: "20px" }}>
            {conteudo === "mensagem" && (
            <p>Página em construção</p>
            )}

            {conteudo === "cores" && (
            <div style={{ display: "flex" }}>
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
</>)
}