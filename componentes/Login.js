import React, {Component } from 'react';
import { StyleSheet, TextInput, View, Text, StatusBar, SafeAreaView, TouchableOpacity, Alert } from 'react-native';
import BotaoRecto from './BotaoRecto';
import Autenticacao from './Autenticacao';
import Home from './home';


export default class Formulario extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showAutentication: false
    };    
  }

  handleRegistrationClick = () => {
    this.setState({
      showAutentication: true
    });
  }
  

  render() {
    if (this.state.showAutentication) {
      return <Autenticacao />;
    } 

  return (
    <SafeAreaView style={styles.container2} >
      <StatusBar backgroundColor={'#D6001B'} />
          <View style={styles.camada1}>
          <View style={styles.container}>
            <StatusBar style={styles.status} barStyle="light-content" backgroundColor="#D6001B" />
            <View style={styles.cabecalho}>
              <Text style={styles.titulo}>Faça Login</Text>
              <Text style={styles.subtitle}>Vamos começar</Text>
            </View>
            <View style={styles.form}>
              <TextInput
                style={styles.input}
                onChangeText={nome => setNome(nome)}
                placeholder="Email ou Telefone"
              />
              <TextInput
                style={styles.input}
                onChangeText={senha => setSenha(senha)}
                secureTextEntry={true}
                placeholder="Senha"
              />
              <View>
                <TouchableOpacity onPress={this.handleRegistrationClick}>
                  <Text style={[styles.esqueceu]}>Esqueceu sua senha?</Text>
                </TouchableOpacity>
              </View>
              <View style={styles.botaoContainer} >
                <BotaoRecto titulo={'Acessar'} />
              </View>
            </View>
          </View>
        </View>
    </SafeAreaView>
   );
  };
}
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
    color:'#D6001B',
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
 esqueceu:{
    marginTop: 0,
    color: "black",
    textAlign: "right",
    marginBottom: - 70,
 },
});





