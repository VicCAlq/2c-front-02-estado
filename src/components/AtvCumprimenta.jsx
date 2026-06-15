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
import { useState } from 'react'

// Estilos de "CSS"
const estilo = {
  view: {
    alignItems: "center",
    justifyContent: "center",
    borderRadius: "10px",
    backgroundColor: "#303540",
    padding: "10px",
    margin: "10px",
    gap: "10px",
  },
  texto: {
    color: "#eee",
    fontSize: "32px",
  },
  textoBotao: {
    color: "#eee",
    fontSize: "16px",
  },
  botao: {
    borderRadius: "5px",
    backgroundColor: "#505560",
    padding: "10px",
    margin: "10px",
  },
  viewBotoes: {
    display: "flex",
    flexDirection: "row",
    flex: "1 0",
    width: "100%",
    justifyContent: "space-between",
    alignItems: "center",
  },
  input: {
    borderRadius: "5px",
    backgroundColor: "#bbb",
    padding: "4px",
  }
}

export default function AtvCumprimenta() {
  // Criação das variáveis que armazenam o texto digitado, e o texto salvo
    const [textoInserido, setTextoInserido] = useState("")
    const [texto, setTexto] = useState("Qual é seu nome?")
    return(
        <div style={estilo.view}>
        <p style={estilo.texto}>
            {texto}
        </p>
        <input
            type="text"
            value={textoInserido}
            style={estilo.input}
            onChange={(e) => setTextoInserido(e.target.value)}
            placeholder="Digite aqui seu nome"
        />
        <button style={estilo.botao} onClick={() => setTexto(textoInserido)}>
            <p style={estilo.textoBotao}>Salvar</p>
        </button>
        </div>
    )
}