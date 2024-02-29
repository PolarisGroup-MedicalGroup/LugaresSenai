import * as React from 'react';

import { Button, View, Text, StyleSheet, Image} from 'react-native';

import { NavigationContainer } from '@react-navigation/native';

import { createNativeStackNavigator } from '@react-navigation/native-stack';



import Corpo from './Corpo';

import Rodapé from './Rodapé';



function HomeScreen({ navigation }) {

  return (

    <View style={{ flex: 1 }}>

      <View style={stylestop.container}>

      <View>

        <Text style={stylestop.title}>LugaresSenai</Text>

      </View>

      <View style={stylestop.navigation}>

      <Button

          title="Banheiro"

          onPress={() => navigation.navigate('Banheiro')} />

        <Button

          title="Biblio."

          onPress={() => navigation.navigate('Biblioteca')} />

        <Button

          title="Almoço"

          onPress={() => navigation.navigate('Almoço')} />

        <Button

          title="Banco"

          onPress={() => navigation.navigate('Bancos')} />

        <Button

          title="Saida"

          onPress={() => navigation.navigate('Entrada')} />

      </View>

    </View>

      <Corpo />

      <Rodapé />

    </View>

  );

}



function BanheiroScreen({ navigation }) {

  return (

    <View style={stylesH.container}>

      <Text style={stylesH.title}>Banheiro</Text>

      <Image source={{uri:'https://raw.githubusercontent.com/PolarisGroup-MedicalGroup/LugaresSenai/main/banheiro.jpg'}}

      style={{width:400, height:400}}/>

      <Text style={stylesH.story}>

      O banheiro é onde tem a mais sincera resenha dos cria

      </Text>

    </View>

  );

}



function BibliotecaScreen({ navigation }) {

  return (

    <View style={stylesH.container}>

      <Text style={stylesH.title}>Biblioteca</Text>

      <Image source={{uri:'https://raw.githubusercontent.com/PolarisGroup-MedicalGroup/LugaresSenai/main/bibli.jpg'}}

      style={{width:400, height:400}}/>

      <Text style={stylesH.story}>

      Gosto da biblioteca pois é um lugar onde eu posso ficar mais a vontade e descansar um pouco depois do almoço

      </Text>

    </View>

  );

}



function BancosScreen({ navigation }) {

    return (

        <View style={stylesB.container}>

        <Text style={stylesB.title}>Bancos</Text>

        <Image source={{uri:'https://raw.githubusercontent.com/PolarisGroup-MedicalGroup/LugaresSenai/main/bancos.jpg'}}

      style={{width:400, height:400}}/>

        <Text style={stylesB.story}>

        Escolhi os bancos pois é um lugar que costumávamos ficar muitas vezes durante o café da manhã, pós-almoço e café da tarde. Nos traz memórias do nosso início como estudantes do SENAI.

        </Text>

      </View>

    );

  }



  function AlmoçoScreen({ navigation }) {

    return (

        <View style={stylesA.container}>

      <Text style={stylesA.title}>Almoço</Text>

      <Image source={{uri:'https://raw.githubusercontent.com/PolarisGroup-MedicalGroup/LugaresSenai/main/almoco.jpg'}}

      style={{width:400, height:400}}/>

      <Text style={stylesA.story}>

      Um ambiente para almoçar com amigos oferece a oportunidade de desfrutar de boa comida, companhia agradável e momentos descontraídos, fortalecendo os laços sociais e proporcionando uma pausa agradável na rotina diária.

      </Text>

    </View>

    );

  }



  function EntradaScreen({ navigation }) {

    return (

        <View style={stylesC.container}>

        <Text style={stylesC.title}>Entrada/saída</Text>

        <Image source={{uri:'https://raw.githubusercontent.com/PolarisGroup-MedicalGroup/LugaresSenai/main/saida.jpg'}}

      style={{width:400, height:400}}/>

        <Text style={stylesC.story}>

        A saída da escola representa liberdade e descanso, e a entrada aprendizado e socialização.

        </Text>

      </View>

    );

  }



const Stack = createNativeStackNavigator();

function App() {

  return (

    <NavigationContainer>

      <Stack.Navigator initialRouteName="Home">

        <Stack.Screen name="Home" component={HomeScreen} />

        <Stack.Screen name="Banheiro" component={BanheiroScreen} />

        <Stack.Screen name="Biblioteca" component={BibliotecaScreen} />

        <Stack.Screen name="Bancos" component={BancosScreen} />

        <Stack.Screen name="Almoço" component={AlmoçoScreen} />

        <Stack.Screen name="Entrada" component={EntradaScreen} />

      </Stack.Navigator>

    </NavigationContainer>

  );

}



const stylestop = StyleSheet.create({

    container: {

      backgroundColor: 'black',

      padding: 20,

      flexDirection: 'column', // Alterado de 'row' para 'column'

      justifyContent: 'flex-start', // Alterado de 'space-between' para 'flex-start'

      alignItems: 'flex-start', // Alterado de 'space-between' para 'flex-start'

      position: 'absolute',

      alignItems: 'center',

      top: 10,

      left: 0,

      right: 0,

    },

    

    title: {

      color: 'white',

      fontSize: 18,

      fontWeight: 'bold',

      marginBottom: 5,

    },

    

    navigation: {

      flexDirection: 'row',

      marginTop: 10,

      fontSize: 100,

      gap: 10,

    },

  });



  const stylesH = StyleSheet.create({

    container: {

      flex: 1,

      backgroundColor: '#fff',

      alignItems: 'center',

      justifyContent: 'center',

    },

    title: {

      fontSize: 24,

      fontWeight: 'bold',

      marginBottom: 16,

    },

    story: {

      fontSize: 16,

      textAlign: 'center',

      lineHeight: 24,

    },



  });



  const stylesB = StyleSheet.create({

    container: {

      flex: 1,

      backgroundColor: '#fff',

      alignItems: 'center',

      justifyContent: 'center',

      paddingHorizontal: 16,

    },

    title: {

      fontSize: 24,

      fontWeight: 'bold',

      marginBottom: 16,

    },

    story: {

      fontSize: 16,

      textAlign: 'center',

      lineHeight: 24,

    },

  });



  const stylesC = StyleSheet.create({

    container: {

      flex: 1,

      backgroundColor: '#fff',

      alignItems: 'center',

      justifyContent: 'center',

      paddingHorizontal: 16,

    },

    title: {

      fontSize: 24,

      fontWeight: 'bold',

      marginBottom: 16,

    },

    story: {

      fontSize: 16,

      textAlign: 'center',

      lineHeight: 24,

    },

  });



  const stylesA = StyleSheet.create({

    container: {

      flex: 1,

      backgroundColor: '#fff',

      alignItems: 'center',

      justifyContent: 'center',

      paddingHorizontal: 16,

    },

    title: {

      fontSize: 24,

      fontWeight: 'bold',

      marginBottom: 16,

    },

    story: {

      fontSize: 16,

      textAlign: 'center',

      lineHeight: 24,

    },

  });

export default App;
