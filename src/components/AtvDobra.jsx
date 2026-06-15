/*
[ATIVIDADE DOBRA]

Crie e exporte por padrão um componente chamado "AtvDobra" que recebe um argumento "numero". 
O componente deve exibir uma <div> contendo um <p>, que vai exibir este número recebido como argumento, 
e um <button>, que ao ser clicado, modifica o valor do número para dobrar o valor dele.
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
  }
}

export default function AtvDobra({numero}) {
  const [valor1, setNumeroDobrado] = useState(numero)

  function dobrar() {
    setNumeroDobrado(valor1 * 2)
  }
   return(<>
    <div style={estilo.view}>
      <p style={estilo.texto}>
        {valor1}
      </p>
      <div>
        <button style={estilo.botao} onClick={dobrar}>
          <p style={estilo.textoBotao}>Dobrar</p>
        </button>
      </div>
    </div>
</>)
}

