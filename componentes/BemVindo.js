import React, { Component} from 'react';
import { StyleSheet, View, Image, Text, TouchableOpacity, StatusBar, Modal} from 'react-native';
import MyRegistrationScreen from './Registro'; // importa a tela de registro
import MyLoginScreen from './Login'; 


export default class LoginScreen extends Component {

  constructor(props) {
    super(props);
    this.state = {
      showRegistrationScreen: false,
      showLoginScreen: false,
      modalVisible: false,
    };    
  }

  
  setModalVisible = (visible) => {
    this.setState({ modalVisible: visible });
  }
  

  handleRegistrationClick = () => {
    this.setState({
      showRegistrationScreen: true,
      showLoginScreen: true
    });
  }
  
  handleLoginClick = () => {
    this.setState({
      showLoginScreen: true
    });
  }

  render() {
    if (this.state.showRegistrationScreen) {
      return <MyRegistrationScreen />;
    } else if (this.state.showLoginScreen) {
      return <MyLoginScreen />;
    }

    return (
      <View style={styles.container}>
        <Modal
          animationType="fade"
          transparent={true}
          visible={this.state.modalVisible}
          onRequestClose={() => this.setModalVisible(false)}>
          <View style={styles.modalContainer}>
            <View style={styles.modalContent}>
              <TouchableOpacity style={styles.modalButton}>
                <Text style={styles.modalButtonText}>Inglês</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.modalButton}>
                <Text style={styles.modalButtonText}>Francês</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.modalButton}>
                <Text style={styles.modalButtonText}>Português</Text>
              </TouchableOpacity>
            </View>
          </View>
          </Modal>
        <StatusBar barStyle="light-content" backgroundColor="#D6001B" />
          <View style={styles.imageContainer}>
            <Image source={require('../assets/imagens/splash2.png')} style={styles.image} />
          </View>
          <View style={styles.textContainer}>
            <Text style={styles.title}>Seja Bem-Vindo!</Text>
            <Text style={styles.subtitle}>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</Text>
          </View>
          <View style={styles.buttonsContainer}>
          <View style={[styles.buttonContainer, {marginBottom: 20}]}>
            <TouchableOpacity style={[styles.button, { borderColor: '#fff' }]} onPress={this.handleRegistrationClick}>
              <Text style={[styles.buttonText, { color: '#fff' }]}>Registrar</Text>
            </TouchableOpacity>
          </View>
          <View style={[styles.buttonContainer, {marginTop: 20}]}>
            <TouchableOpacity style={[styles.button, { backgroundColor: '#fff'}]} onPress={this.handleLoginClick}>
              <Text style={[styles.buttonText, { color: '#D6001B' }]}>Acessar</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.idiomaContainer}>
        <TouchableOpacity onPress={() => this.setModalVisible(true)}>
          <Text style={[styles.idiomaText]}>Idioma</Text>
        </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  buttonText:{
    fontWeight: 'bold',
    fontSize: 15,
    fontFamily: "Poppins Regular",
    elevation: 30,
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#D6001B',
  },
  imageContainer: {
    position: 'absolute',
    justifyContent: 'center',
    alignItems: 'center',
    top: 0,
    left: 0,
    right: 0,
    elevation: 10,
  },
  image: {
    width: 200,
    height: 200,
    resizeMode: 'contain',
    margin: 30,
    marginTop: 0,
  },
  textContainer: {
    marginTop: 30,
    alignItems: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#fff',
    margin: 30,
    top: 35,
  },
  subtitle: {
    fontSize: 14,
    marginTop: 30,
    marginBottom: 30,
    textAlign: 'center',
    color: '#fff',
  },
  buttonsContainer: {
    width: '90%',
    flexDirection: 'column',
    marginTop: 20,
    marginBottom: 0,
    margin: 1,
    justifyContent: 'center',
    elevation: 5,
  },
  buttonContainer: {
    width: '100%',
  },
  button: {
    height: 55,
    borderRadius: 4,
    borderWidth: 1,
    justifyContent: 'center',
    alignItems: 'center',
    borderBottomEndRadius:15,
    borderBottomLeftRadius:15,
    borderBottomRightRadius:15,
    borderBottomStartRadius:15,
    borderTopEndRadius: 15,
    borderTopLeftRadius: 15,
  },
  idiomaContainer: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
  idiomaText: {
    color: "#fff",
    fontWeight: 'bold',
    fontSize: 14,
  },  
modalContainer: {
  flex: 1,
  backgroundColor: 'rgba(0, 0, 0, 0.5)',
  justifyContent: 'flex-end',
},
modalContent: {
  backgroundColor: '#D6001B',
  borderTopLeftRadius: 20,
  borderTopRightRadius: 20,
  padding: 20,
  borderColor: '#fff',
  borderWidth: 2,
  borderTopWidth: 0,
},
modalButton: {
  height: 50,
  justifyContent: 'center',
  alignItems: 'center',
  borderBottomWidth: 1,
  borderBottomColor: '#ccc',
},
modalButtonText: {
  fontSize: 16,
  fontWeight: 'bold',
  color: '#fff'
},
});
