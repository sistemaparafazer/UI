import React, { Component } from 'react';
import { Image, StyleSheet, View, StatusBar, ActivityIndicator } from 'react-native';
import BemVindo from './componentes/BemVindo';

const splashImg = require('./assets/imagens/splash1.png');
export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = { showSplash1: true, showSplash2: false };
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({ showSplash1: false, showSplash2: true });
      setTimeout(() => {
        this.setState({ showSplash2: false });
      }, 3000);
    }, 2000);
  }

  render() {
    if (this.state.showSplash1) {
      return (
        <View style={[styles.container, { backgroundColor: '#D6001B'}]}>
          <StatusBar barStyle="light-content" backgroundColor="#D6001B" />
          <Image source={require("./assets/imagens/splash1.png")} style={styles.splashImage} />
        </View>
      );
    } else if (this.state.showSplash2) {
      return (
        <View style={[styles.container, { backgroundColor: '#D6001B' }]}>
          <StatusBar barStyle="light-content" backgroundColor="#D6001B" />
          <Image source={require("./assets/imagens/splash2.png")} style={styles.splashImage2} />
          <ActivityIndicator size="large" color="#FFFFFF" />
        </View>
      );
    } else {
      return (
        <BemVindo />
      );
    }
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  splashImage: {
    resizeMode: 'contain',
    width: '80%',
  },
  splashImage2: {
    resizeMode: 'contain',
    width: '50%',
    height: '35%',
    marginBottom: 10,
  },
  text: {
    fontSize: 20,
    fontWeight: 'bold',
  },
});
