/*
[ATIVIDADE DOBRA]

Crie e exporte por padrão um componente chamado "AtvDobra" que recebe um argumento "numero". 
O componente deve exibir uma <div> contendo um <p>, que vai exibir este número recebido como argumento, 
e um <button>, que ao ser clicado, modifica o valor do número para dobrar o valor dele.
*/

import { useState } from "react";

export default function AtvDobra({ numero }) {
    const [num, setNum] = useState(numero);

    return (
        <div>
            <p>{num}</p>
            <button onClick={() => setNum(num * 2)}>Dobrar</button>
        </div>
    );
}
