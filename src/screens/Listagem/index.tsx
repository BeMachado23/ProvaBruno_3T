import React from 'react';
import { StyleSheet } from 'react-native';
import { View, Text, FlatList } from 'react-native';




const nomes = ['Bernardo Machado', '23/05/06', '14130865942', 'Estrada Intendente Antônio Damasco', 'bemachado.floripa@gmail.com', "R$40,00"]


export function Listagem() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Pacientes agendados</Text>
      <FlatList
        data={nomes}
        renderItem={({ item }) => (
          <View>
            <Text style={styles.txt}>{item}</Text>
          </View>
        )}
        keyExtractor={(item, index) => index.toString()}
      />
    </View>
  );
}

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignContent: 'center',
    alignItems:'center',
    backgroundColor: "white",


  },
  title:{
    fontSize: 22,
    fontWeight: 'bold',
    marginTop: 200,
    marginBottom: 30,
  },
  txt:{
    fontSize: 14,
    marginBottom: 20,
    
  }
});