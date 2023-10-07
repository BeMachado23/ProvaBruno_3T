import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native'; 


import Agendamento from '../Agendamento';
import Listagem from '../Listagem';

export function Home() {
  const navigation = useNavigation(); 

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Olá, seja bem-vindo</Text>
      <TouchableOpacity
        style={styles.bottom}
        onPress={() => navigation.navigate('Agendamento')} 
      >
        <Text style={styles.buttonText}>Agendamento</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.bottom}
        onPress={() => navigation.navigate('Listagem')} 
      >
        <Text style={styles.buttonText}>Pacientes Agendados</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
  },
  bottom: {
    marginTop: 50,
    backgroundColor: '#006666',
    borderRadius: 15,
    width: 200,
    height: 50,
    alignItems: 'center', 
    justifyContent: 'center', 
  },
  title: {
    fontSize: 22,
    marginTop: 300,
  },
  buttonText: {
    fontSize: 15,
    color: 'white',
  },
});
