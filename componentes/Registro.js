import React, { useState } from 'react';
import { StyleSheet, TextInput, View, Text, StatusBar, SafeAreaView} from 'react-native';
import BotaoRecto from './BotaoRecto';

const Formulario = () => {
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [telefone, setTelefone] = useState('');
  const [senha, setSenha] = useState('');
  const [ConfirmarSenha, setConfirmarSenha] = useState('');

  return (
    
  <SafeAreaView style={styles.container2} >
  <StatusBar backgroundColor={'#D6001B'} />
    <View style={styles.camada1}>
    <View style={styles.container}>
    <StatusBar  style={styles.status} barStyle="light-content" backgroundColor="#D6001B"/>
         <View style={styles.cabecalho}>
    <Text style={styles.titulo}>Registo</Text>
    <Text style={styles.subtitle}>Vamos começar</Text>
      </View>
      <View style={styles.form}>
     
        <TextInput
          style={styles.input}
          onChangeText={nome => setNome(nome)}
          placeholder="Nome Completo"
        />
        <TextInput
          style={styles.input}
          onChangeText={telefone => setTelefone(telefone)}
          keyboardType={"numeric"}
          placeholder="Telefone"
        />
        <TextInput
          style={styles.input}
          onChangeText={email => setEmail(email)}
          keyboardType={"email-address"}
          placeholder="Email"
        />
        <TextInput
          style={styles.input}
          onChangeText={senha => setSenha(senha)}
          secureTextEntry={true}
          placeholder="Senha"
        />
        <TextInput
          style={styles.input}
          onChangeText={ConfirmarSenha => setConfirmarSenha(senha)}
          secureTextEntry={true}
          placeholder="Confirmar Senha"
        />
        <View style={styles.botaoContainer}>
          <BotaoRecto titulo={'Confirmar Registo'} />
        </View>
      </View>
    </View>
    </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: 50,
    borderTopLeftRadius:50,
    borderTopRightRadius:50
  },
  cabecalho: {
    alignItems: 'center',
    marginBottom:40,
    right:130
    
  },
  titulo: {
    fontSize: 20,
    fontWeight: 'bold',
    color:'#D6001B'    
  },
  form: {
    paddingHorizontal: 20,
    top:20,
  },
  input: {
    height: 50,
    borderWidth: 1,
    borderColor: 'white',
    borderRadius: 10,
    paddingHorizontal: 10,
    marginBottom: 15,
    backgroundColor: '#F4F8FB',
    fontSize: 15,
  },
  botaoContainer: {
    alignItems: 'center',
    marginTop: 1,
    bottom:50,
    height: 50,

  },
  subtitle:{
    fontSize: 12,
  },
  container2:{
    backgroundColor:'#D6001B',
    width:'100%',
    height:'100%'  
    
 },
 camada1:{
   backgroundColor:'white',
   width:'100%',
   height: "95%",
   position:'absolute',
   bottom:0,
   marginBottom:0,
   borderTopRightRadius:50,
   borderTopLeftRadius:50

 },
});

export default Formulario;




