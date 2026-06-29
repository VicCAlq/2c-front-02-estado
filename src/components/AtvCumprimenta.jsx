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

import { useState } from "react"
export default function AtvCumprimenta() {
    const [nome, setNome] = useState('')
    const [cumprimento, setCumprimento] = useState(false)
    const style = {
        botao: {
            borderRadius: "5px",
            backgroundColor: "#505560",
            padding: "10px",
            margin: "10px",

            texto: {
                color: "#eee",
                fontSize: "32px",
            }
        }
    }
    return (
        <div>
            <p style={style.texto}>Olá, qual seu nome?</p>
            <input type="text" value={nome} onChange={(nome) => setNome(nome.target.value)} />
            <button style={style.botao} onClick={() => setCumprimento(true)}>Salvar</button>
            {cumprimento && <p style={style.texto}>É um prazer lhe conhecer, {nome}</p>}
        </div>
    )
}
