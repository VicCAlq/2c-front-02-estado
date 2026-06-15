// Elementos necessários para o componente
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

export default function Placar() {
  // Criação da variável "placar" e da função que altera seu valor
  const [placar, setPlacar] = useState(0)

  // Funções que vão ser executadas pelos botões
  function marcarPonto() {
    setPlacar(placar * 2)
  }

  function perderPonto() {
    setPlacar(placar / 2)
  }

  // Parte visual do componente
  return(
    <div style={estilo.view}>
      
      <input
        type="number"
        value={placar}
        style={estilo.texto}
        onChange={(e) => setPlacar(e.target.value)}
      />
      <div style={estilo.viewBotoes}>
        <button style={estilo.botao} onClick={() => marcarPonto()}>
          <p style={estilo.textoBotao}>Vezes dois</p>
        </button>
        <button style={estilo.botao} onClick={() => perderPonto()}>
          <p style={estilo.textoBotao}>dividido por dois</p>
        </button>
      </div>
    </div>
  )
}
