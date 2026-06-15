/*
[ATIVIDADE CUMPRIMENTA]

Crie e exporte por padrão um componente chamado "AtvCumprimenta". Este componente não recebe nenhum argumento. 
Ele deve retornar uma <div>, onde dentro dela haverá um <p> com o conteúdo "Olá, qual seu nome?". 
Abaixo deste <p> deve haver um <input> onde o usuário poderá digitar seu nome. 
Ao lado deste <input> deve haver um <button>, que ao ser apertado vai fazer um <p> ser exibido abaixo 
com o texto "É um prazer lhe conhecer, [NOME]", onde [NOME] deve ser igual ao texto que o usuário digitou no <input>.

Ordem visual dos elementos:

_________________________________
|       Olá, qual seu nome?     |
|                               |
|  ________________  ________   |
| | Nome aqui     | | Salvar |  |
| ----------------  ---------   |
|                               |
| É um prazer lhe conhecer...   |
|_______________________________|
*/
export default function AtvCumprimenta () {

    return (
    <div>
        <p>Olá, qual é seu nome?</p>
        <input type="text"
        type="text"
        value={textoInserido}
      onChange={(e) => setTextoInserido(e.target.value)}
      placeholder="Digite aqui o novo texto"
        />
        <button style={estilo.botao} onClick={() => setTexto(textoInserido)}>
        <p style={estilo.textoBotao}>Salvar texto</p>
      </button>
    </div>
    )

}