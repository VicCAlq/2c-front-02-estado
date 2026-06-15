/*
[ATIVIDADE DOBRA]

Crie e exporte por padrão um componente chamado "AtvDobra" que recebe um argumento "numero". 
O componente deve exibir uma <div> contendo um <p>, que vai exibir este número recebido como argumento, 
e um <button>, que ao ser clicado, modifica o valor do número para dobrar o valor dele.
*/
import { useState } from 'react'

const style = {
    div: {
        backgroundColor: "#303540",
        borderRadius: '10px',
        padding: "10px",
        margin: "10px",
        gap: "10px",
    },
    p: {
        fontSize: '26px',
        color: '#eee'
    },
    button: {
        borderRadius: "5px",
        backgroundColor: "#505560",
        padding: "10px",
        margin: "10px",
        fontSize: '16px',
        fontWeight: '500'
    }
}


export default function AtvDobra({numero}){
    const [multiplicado, setMultiplicado] = useState(numero);

    function multiplicar() {
        setMultiplicado(multiplicado * 2); 
    }

    return(<>
    <div style={style.div}>
        <p style={style.p}>{multiplicado}</p>
        <button style={style.button} onClick={multiplicar}>Dobre</button>
    </div>
</>)
}