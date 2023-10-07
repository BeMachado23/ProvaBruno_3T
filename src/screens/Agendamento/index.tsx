import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';
import React from 'react';


export function Agendamento() {


  const [name, setName] = React.useState('')
  const [endereco, setEndereco] = React.useState('')
  const [dataNascimento, setNascimento] = React.useState('')
  const [email, setEmail] = React.useState('')
  const [valorConsulta, setValor] = React.useState('')
  const [cpf, setCpf] = React.useState('')


function handleInfo(){
console.log(name);
console.log(dataNascimento);
console.log(cpf);
console.log(endereco);
console.log(email);
console.log(valorConsulta);
}




  return (
    <View style={styles.container}>
      <Text style={{fontSize: 22, marginBottom: 40, fontWeight: 'bold'}}>Preencha as informações do cliente aqui</Text>
      <TextInput placeholder='Nome Completo' style={styles.input} value={name} onChangeText={setName}></TextInput>
      <TextInput placeholder='Data de nascimento' style={styles.input} value={dataNascimento} onChangeText={setNascimento}></TextInput>
      <TextInput placeholder='CPF'style={styles.input} value={cpf} onChangeText={setCpf}></TextInput>
      <TextInput placeholder='Endereço' style={styles.input} value={endereco} onChangeText={setEndereco}></TextInput>
      <TextInput placeholder='E-mail' style={styles.input} value={email} onChangeText={setEmail}></TextInput>
      <TextInput placeholder='Valor da Consulta' style={styles.input} value={valorConsulta} onChangeText={setValor}></TextInput>
     
      <TouchableOpacity style={styles.button} onPress={() => handleInfo()}><Text style={{color: "white"}}>Agendar</Text></TouchableOpacity>
   
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  input:{
    marginBottom: 30,
    borderBottomWidth: 1,
    width: 200,
    height: 30,


  },
  button:{
    display: 'flex',
    width: 200,
    height: 50,
    borderWidth: 2,
    borderRadius: 10,
    justifyContent:'center',
    alignItems:'center',
    backgroundColor: "#4b98b8",
  },
  info:{
  marginBottom: 10,
  fontWeight: 'bold',
  }
});