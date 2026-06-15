/*
[ATIVIDADE DOBRA]


Crie e exporte por padrão um componente chamado "AtvDobra" que recebe um argumento "numero". 
O componente deve exibir uma <View> contendo um <Text>, que vai exibir este número recebido como argumento, 
e um <Pressable>, que ao ser clicado, modifica o valor do número para dobrar o valor dele.
*/
import React, { useState } from "react";
import { View, Text, Pressable } from "react-native";


export default function AtvDobra({ numero }) {
  const [valor, setValor] = useState(numero);


  return (
    <View>
      <Text>{valor}</Text>


      <Pressable onPress={() => setValor(valor * 2)}>
        <Text>Dobrar</Text>
      </Pressable>
    </View>
  );
}
