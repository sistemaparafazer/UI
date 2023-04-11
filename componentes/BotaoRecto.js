import { View, Text,StyleSheet,TouchableOpacity } from 'react-native'
import React from 'react'

const BotaoRecto = ({titulo}) => {
    const onPress = () =>" setCount(prevCount => prevCount + 1)";
    return (
      <View style={styles.container}>
        <TouchableOpacity style={styles.button} onPress={onPress}>
          <Text style={{color:'white',fontSize:14}}>
             {titulo} 
              </Text>
        </TouchableOpacity>
      </View>
    );
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
      width:'100%',
      margin:50,
      paddingHorizontal: 10,
  
    },
    button: {
      alignItems: 'center',
      backgroundColor: '#D6001B',
      borderRadius:10,
      flexDirection:'row',
      justifyContent:'center',
      height:50,
      width:'100%',
      marginTop: 70,
    },
  
  });
  

export default BotaoRecto