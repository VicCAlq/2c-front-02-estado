/*
[ATIVIDADE TELEFONE SEM FIO]

Crie e exporte por padrão um componente chamado "AtvTelefoneSemFio" que não recebe argumentos.
Este componente deve retornar uma <div> com dois <button> lado a lado, e uma <div> abaixo dos botões.
Cada <button> ao ser clicado, deve inserir na <div> abaixo um <p> e um <input>, 
e substituir o conteúdo anterior dessa <div> de baixo dos botões.
O texto digitado no <input> ativado por um <button> deve ser exibido no <p> do outro <button>, e vice-versa.
*/

import { useState } from 'react'

export default function AtvTelefoneSemFio() {
    const [botaoSel, defBotaoSel] = useState(0)
    const [mensagemA, defMensagemA] = useState("")
    const [mensagemB, defMensagemB] = useState("")

    return (
        <div>
            <button>A</button>
            <button>B</button>
            <div>{ 

            }</div>
        </div>
    )
}
// TODO: TERMINAR O TELEFONE!
