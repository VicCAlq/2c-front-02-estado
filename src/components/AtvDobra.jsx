/*
[ATIVIDADE DOBRA]

Crie e exporte por padrão um componente chamado "AtvDobra" que recebe um argumento "numero". 
O componente deve exibir uma <div> contendo um <p>, que vai exibir este número recebido como argumento, 
e um <button>, que ao ser clicado, modifica o valor do número para dobrar o valor dele.
*/

import React, { useState } from 'react';
import { View, texto, botao, textoBotao, viewBotoes } from 'react-native';

const estilos = create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    },
  text: {
    fontSize: 16,
    marginBottom: 25,
  },
    });

export default function App(AtvDobra)
    {
const [numero, setNumero] = useState("2px");
    }
function dobrar() {
    setNumero(numero * 2);
    }

     return (
    <View style={estilos.container}>
      <Text style={estilos.text}> sim {numero} vezes!</Text>
      <Button title="Click here" onPress={dobrar} />
    </View>
    );
