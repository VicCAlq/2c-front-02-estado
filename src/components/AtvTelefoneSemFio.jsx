/*
[ATIVIDADE TELEFONE SEM FIO]

Crie e exporte por padrão um componente chamado "AtvTelefoneSemFio" que não recebe argumentos.
Este componente deve retornar uma <div> com dois <button> lado a lado, e uma <div> abaixo dos botões.
Cada <button> ao ser clicado, deve inserir na <div> abaixo um <p> e um <input>, 
e substituir o conteúdo anterior dessa <div> de baixo dos botões.
O texto digitado no <input> ativado por um <button> deve ser exibido no <p> do outro <button>, e vice-versa.
*/

import { useState } from "react";

export default function AtvTelefoneSemFio() {

    const [conteudoClaro, setConteudoClaro] = useState('');
    const [conteudoOi, setConteudoOi] = useState('');
    const [telefone, setTelefone] = useState('');

    const style = {
        box: {
            display: 'flex',
        }
    }

    return (
        
        <div style={style.box}>
            <button onClick={() => setTelefone('claro')}>
                Telefone Claro
            </button>
            <button onClick={() => setTelefone('oi')}>
                Telefone Oi
            </button>

            

            <div>
                {telefone === 'claro' ? (
                    <>
                    <input 
                        type="text"
                        onChange={(e) => setConteudoClaro(e.target.value)}
                        placeholder="Telefone de Vitinho"
                        value={conteudoOi}
                    />
                    </>
                ) : null}

                {telefone === 'oi' ? (
                    <>
                    <input 
                        type="text"
                        onChange={(e) => setConteudoOi(e.target.value)}
                        placeholder="Telefone de Silviooo"
                        value={conteudoClaro}
                    />
                    </>
                ) : null}


            </div>
            
        </div>
    );
}
