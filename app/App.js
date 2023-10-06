import { StatusBar } from 'expo-status-bar';
import { ImageBackground, View, Text, StyleSheet, TouchableOpacity, Image, TextInput, ScrollView} from "react-native";
import {useState} from 'react';


  


export default function App() {

  const [mostrarFeed, setMostrarFeed] = useState(<Feed />)
  


  return (
      
      <View style={styles.container}>



      {mostrarFeed}
      


      <StatusBar style="auto" />
      </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#00ff00',
   
  },
  textoH1: {
    fontSize: 40,
    marginBottom: 20,

  },
  texto: {
    fontSize: 20,
    marginTop: 10

  },
  input:{
    height: '5%',
    width: '50%',
    backgroundColor: '#ffffff',
    borderRadius: 25,
    paddingLeft: 10,
    borderWidth: 1,
    marginBottom: 10
    

  },
  resultado:{
  fontSize: 20

  },
  feed:{
    height: '70%',
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',

  },
  result:{
    height: '30%',
    width: '100%'

  },
  botao:{
    height: '10%',
    width: '50%',
    borderWidth: 1,
    borderRadius: 15,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#097bf4',

  }

});


function Feed(){

  const [precoConta, setPrecoConta] = useState()
  const [porcentagem, setPorcentagem] = useState()
  const [calculo, setCalculo] = useState()
  const [totalApagar, setTotalApagar] = useState()
  

  function calcular(){

  let preco = Number(precoConta)
  let soma = Number((precoConta * porcentagem) / 100)
  let resultadoTotal = (preco + soma)

  


  styles.resultado = {color: '#097bf4', fontSize: 20}

  setCalculo(soma.toFixed(2))
  setTotalApagar(resultadoTotal.toFixed(2))
  


  }

return(

<View style={styles.container}>

<View style={styles.feed}>

<Text style={styles.textoH1}>Calculo de Gorjeta</Text>

<Text style={styles.texto}>Total da conta (R$):</Text>

  <TextInput

     multiline= {false}
     style={styles.input}
     value={precoConta}
     onChangeText={setPrecoConta}
  />



<Text style={styles.texto}>Porcentagem da gorjeta (%):</Text>

<TextInput

     multiline= {false}
     style={styles.input}
     value={porcentagem}
     onChangeText={setPorcentagem}
  />

  <TouchableOpacity onPress={calcular} style={styles.botao}>
  <Text>CALCULAR</Text>
  </TouchableOpacity>
  </View>
  <View style={styles.result}>
  <Text style={styles.resultado}>Gorjeta:  R${calculo}</Text>
  <Text style={styles.resultado}>Total a pagar R${totalApagar}</Text>
  </View>
</View>

)
}

