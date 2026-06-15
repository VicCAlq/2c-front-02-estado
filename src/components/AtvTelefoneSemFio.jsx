/*
[ATIVIDADE TELEFONE SEM FIO]

Crie e exporte por padrão um componente chamado "AtvTelefoneSemFio" que não recebe argumentos.
Este componente deve retornar uma <div> com dois <button> lado a lado, e uma <div> abaixo dos botões.
Cada <button> ao ser clicado, deve inserir na <div> abaixo um <p> e um <input>, 
e substituir o conteúdo anterior dessa <div> de baixo dos botões.
O texto digitado no <input> ativado por um <button> deve ser exibido no <p> do outro <button>, e vice-versa.
*/
```jsx
import { useState } from "react";

export default function AtvTelefoneSemFio() {
  const [textoA, setTextoA] = useState("");
  const [textoB, setTextoB] = useState("");
  const [ativo, setAtivo] = useState(null);

  function usarA() {
    setAtivo("A");
  }

  function usarB() {
    setAtivo("B");
  }

  function handleChange(e) {
    if (ativo === "A") {
      setTextoA(e.target.value);
    } else if (ativo === "B") {
      setTextoB(e.target.value);
    }
  }

  return (
    <div>
      <div style={{ display: "flex", gap: "10px" }}>
        <button onClick={usarA}>Botão A</button>
        <button onClick={usarB}>Botão B</button>
      </div>

      <div style={{ marginTop: "20px" }}>
        {ativo === "A" && (
          <div>
            <p>{textoB}</p>
            <input value={textoA} onChange={handleChange} />
          </div>
        )}

        {ativo === "B" && (
          <div>
            <p>{textoA}</p>
            <input value={textoB} onChange={handleChange} />
          </div>
        )}
      </div>
    </div>
  );
}
```
