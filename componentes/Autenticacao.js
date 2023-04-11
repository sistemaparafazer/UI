import React, { useState, useEffect } from 'react';
import { StyleSheet, TextInput, View, Text, StatusBar, SafeAreaView} from 'react-native';
import BotaoRecto from './BotaoRecto';


const Formulario = () => {
  const [nome, setNome] = useState('');
  const [idade, setIdade] = useState('');
  const [email, setEmail] = useState('');
  const [telefone, setTelefone] = useState('');
  const [senha, setSenha] = useState('');
  const [ConfirmarSenha, setConfirmarSenha] = useState('');

  const [tempoRestante, setTempoRestante] = useState(45);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTempoRestante((tempo) => tempo - 1);
    }, 1000);
    return () => clearInterval(intervalId);
  }, []);
  
  useEffect(() => {
    if (tempoRestante === 0) {
      //Tenho de determinar o que vai acontecer
    }
  }, [tempoRestante]);

  return (

  <SafeAreaView style={styles.container2} >
    <StatusBar backgroundColor={'#D6001B'} />
      <View style={styles.camada1}>
      <View style={styles.container}>
      <StatusBar  style={styles.status} barStyle="light-content" backgroundColor="#D6001B"/>
      <View style={styles.cabecalho}>
        <Text style={styles.titulo}>Validação</Text>
      </View>
      <Text style={styles.subtitle}>Insira o código de 6-dígitos que foi enviado para O número +244 923 558 191. <Text style={{color: "red"}}> Você inseriu o número Correcto? </Text></Text>
        <SafeAreaView style={styles.container}>
        <View style={{flexDirection:"row"}}>
          <View style={styles.inputWrapper}>
            <TextInput  placeholder="6" style={styles.input} maxLength={1}  keyboardType='numeric' />
          </View>
          <View>
            <TextInput style={styles.input} placeholder="2" maxLength={1} keyboardType='numeric' />
          </View>
          <View>
            <TextInput style={styles.input} placeholder="7" maxLength={1}  keyboardType='numeric' />
          </View>
          <View>
            <TextInput style={styles.input} placeholder="3" maxLength={1}  keyboardType='numeric'/>
          </View>
          <View>
            <TextInput style={styles.input} placeholder="." maxLength={1}  keyboardType='numeric'/>
          </View>
          <View>
            <TextInput style={styles.input} placeholder="."  maxLength={1}  keyboardType='numeric'/>
          </View>
        </View>
        <View>
        <Text style={styles.Reenviarcodigo}>
          Reenvie o código em <Text style={{ color: 'red' }}>
            {tempoRestante} {tempoRestante === 1 ? 'segundo' : 'segundos'}
          </Text>
        </Text>
      </View>
        <View style={styles.botaoContainer} >
          <BotaoRecto titulo={'Confirmar'} />
        </View>
      </SafeAreaView>
        </View>
      </View>
    </SafeAreaView>
    
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: 70,
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
    marginTop: 50,
  },
  form: {
    paddingHorizontal: 20,
    top:20,
  },
  input: {
    height: 60,
    width: 70,
    borderWidth: 1,
    borderColor: 'white',
    borderRadius: 10,
    paddingHorizontal: 10,
    marginBottom: 14,
    backgroundColor: '#F4F8FB',
    fontSize: 16,
    color: "#D6001B",
    textAlign: "center",
    fontWeight: 'bold',
  },
  botaoContainer: {
    alignItems: 'center',
    marginTop: 0,
    bottom:50,
    height: 1,
  },
  subtitle:{
    fontSize: 16,
    right: 0,
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
 Reenviarcodigo:{
    marginTop: 40,
    textAlign: "center"
 }
});


export default Formulario;




