import React from 'react';

import { View, Text, StyleSheet } from 'react-native';



const Rodapé = () => {

  return (

    <View style={styles.container}>

      <View style={styles.contacts}>

        <Text style={styles.title}>Rodapé</Text>

        <Text>Atendimento.</Text>

      </View>

      <View style={styles.socialMedia}>

        <Text style={styles.socialMediaTitle}>Redes sociais:</Text>

        <View style={styles.socialIcons}>

          {/* Adicione os ícones de redes sociais aqui */}

        </View>

      </View>

      <View style={styles.navigation}>

        <Text style={styles.navigationTitle}>Navegação</Text>

        <Text>Home</Text>

        <Text>Projetos</Text>

        <Text>Sobre</Text>

        <Text>Blog</Text>

        <Text>Contato</Text>

      </View>

      <View style={styles.help}>

        <Text style={styles.helpTitle}>Ajuda</Text>

        <Text>Contato</Text>

        <Text>Configurações</Text>

        <Text>Sobre Nós</Text>

        <Text>Política de Privacidade</Text>

      </View>

    </View>

  );

};



const styles = StyleSheet.create({

  container: {

    backgroundColor: 'black',

    padding: 20,

    flexDirection: 'row',

    justifyContent: 'space-between',

    position: 'absolute',

    bottom: 0,

    left: 0,

    right: 0,

  },

  contacts: {

    flex: 1,

    marginRight: 10,

  },

  title: {

    color: 'white',

    fontSize: 18,

    fontWeight: 'bold',

    marginBottom: 5,

  },

  socialMedia: {

    flex: 1,

    marginRight: 10,

  },

  socialMediaTitle: {

    color: 'white',

    fontSize: 16,

    marginBottom: 5,

  },

  socialIcons: {

    flexDirection: 'row',

    justifyContent: 'space-between',

  },

  navigation: {

    flex: 1,

    marginRight: 10,

  },

  navigationTitle: {

    color: 'white',

    fontSize: 16,

    marginBottom: 5,

  },

  help: {

    flex: 1,

  },

  helpTitle: {

    color: 'white',

    fontSize: 16,

    marginBottom: 5,

  },

});





export default Rodapé;
