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
  },
  input: {
    borderRadius: "5px",
    backgroundColor: "#bbb",
    padding: "4px",
  }
}

export default function InputTexto() {
  // Criação das variáveis que armazenam o texto digitado, e o texto salvo
  const [textoInserido, setTextoInserido] = useState("")
  const [texto, setTexto] = useState("Quem é este Pokemon?")

  // Parte visual do componente
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
        placeholder="Digite aqui o novo texto"
      />
      <button style={estilo.botao} onClick={() => setTexto(textoInserido)}>
        <p style={estilo.textoBotao}>Salvar texto</p>
      </button>
    </div>
  )
}

