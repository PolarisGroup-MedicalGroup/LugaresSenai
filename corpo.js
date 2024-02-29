import React from 'react';

import { View, Text, StyleSheet } from 'react-native';



const Corpo = () => {

  return (

    <View style={styles.container}>

      <Text style={styles.texto}>Lugares do Senai - MADE BY PolarisGroup</Text>

    </View>

  );

};



const styles = StyleSheet.create({

  container: {

    flex: 1,

    justifyContent: 'center',

    alignItems: 'center',

  },

  texto: {

    fontSize: 24,

    fontWeight: 'bold',

  },

});



export default Corpo;
