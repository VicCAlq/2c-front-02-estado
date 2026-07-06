/*
[ATIVIDADE TELEFONE SEM FIO]

Crie e exporte por padrão um componente chamado "AtvTelefoneSemFio" que não recebe argumentos.
Este componente deve retornar uma <View> com dois <Pressable> lado a lado, e uma <View> abaixo dos botões.
Cada <Pressable> ao ser clicado, deve inserir na <View> abaixo um <Text> e um <TextInput>, 
e substituir o conteúdo anterior dessa <View> de baixo dos botões.
O texto digitado no <TextInput> ativado por um <Pressable> deve ser exibido no <Text> do outro <Pressable>, e vice-versa.
*/

import { createElement } from "react"

export default function AtvMudaConteudo(){
    const [conteudo, setConteudo] = useState("");

    function mostrarMensagem() {
        setConteudo("mensagem");
    }

    function mostrarCores() {
        setConteudo("cores");
    }

    return(
<>
    <div>
        <div style={{ display: "flex", gap: "10px" }}>
            <button onClick={mostrarMensagem}>
            Mostrar Mensagem
            </button>

            <button onClick={mostrarCores}>
            Mostrar Cores
            </button>
        </div>

        <div style={{ marginTop: "20px" }}>
            {conteudo === "mensagem" && (
            <p>Página em construção</p>
            )}

            {conteudo === "cores" && (
            <div style={{ display: "flex" }}>
                <div
                style={{
                    width: "200px",
                    height: "200px",
                    backgroundColor: "purple",
                }}
                />

                <div
                style={{
                    width: "200px",
                    height: "200px",
                    backgroundColor: "teal",
                }}
                />

                <div
                style={{
                    width: "200px",
                    height: "200px",
                    backgroundColor: "orange",
                }}
                />
            </div>
            )}
        </div>
    </div>   
</>)
}