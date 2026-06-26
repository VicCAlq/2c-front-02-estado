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
    const [mensagemA, defMensagemA] = useState("Não há mensagens.")
    const [mensagemB, defMensagemB] = useState("Não há mensagens.")

    return (
        <div>
            <button onClick={ () => defBotaoSel(1) }>A</button>
            <button onClick={ () => defBotaoSel(2) }>B</button>
            <div>{ botaoSel != 0 ? (
                <>
                <p>{ botaoSel == 1 ? mensagemB : 
                mensagemA }</p>
                <input type="text" value={ botaoSel == 1 ? mensagemA : 
                mensagemB } onChange={ (e) => {
                    if (botaoSel == 1)
                        defMensagemA(e.target.value)
                    else
                        defMensagemB(e.target.value)
                } } />
                </>
            ) : <p>Comece a conversar pressionando nos botões!</p> }</div>
        </div>
    )
}
