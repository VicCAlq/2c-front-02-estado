/*
[ATIVIDADE DOBRA]

Crie e exporte por padrão um componente chamado "AtvDobra" que recebe um argumento "numero". 
O componente deve exibir uma <div> contendo um <p>, que vai exibir este número recebido como argumento, 
e um <button>, que ao ser clicado, modifica o valor do número para dobrar o valor dele.
*/

import { useState } from "react"
export default function AtvDobra({ numero }) {
    const style = {
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
    const [mult, setMult] = useState(numero)

    return (<div>
        <p style={style.texto}>{mult}</p>
        <button style={style.botao} onClick={() => setMult(mult * 2)}>Dobre</button>
    </div>)
}
