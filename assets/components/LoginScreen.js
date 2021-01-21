import React from 'react';
import { StyleSheet, View, KeyboardAvoidingView, Image, Text, TextInput, TouchableOpacity, Button, Alert, SafeAreaView } from 'react-native';


export default function LoginScreen({ navigation }) {
  

  return (

    
    <KeyboardAvoidingView
    behavior="padding"
    style={styles.container}
    >
      <SafeAreaView style={styles.container}>

        <Image
          style={styles.imgLogo}
          source={require('../images/logoapplogin.png')}
        />
        
        <TextInput
          style={styles.input}
          placeholder='Digite seu Email'
        />

        <TextInput
          style={styles.input}
          secureTextEntry={true}
          placeholder='Digite sua senha'
          keyboardType="numeric"
        />

        <TouchableOpacity 
        style={styles.btn}
        onPress={ () => navigation.navigate('LocationScreen')}
        >
          <Text style={styles.textBtn}>Login</Text>
        </TouchableOpacity>

        <Button
          onPress={ () => navigation.navigate('RegisterScreen')}
          title="Criar conta Gratuita"
          color="#000"
        />
      </SafeAreaView>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#ffd931',
  },
  imgLogo: {
    width: 200,
    height: 200,
    marginBottom: 10,
  },
  input: {
    color: '#000',
    marginTop: 12,
    padding: 10,
    width: 300,
    height: 50,
    backgroundColor: '#fff',
    fontSize: 16,
    borderRadius: 3,
  },
  btn: {
    width: 300,
    height: 50,
    backgroundColor: '#3498db',
    margin: 20,
    borderRadius: 4,
    alignItems: 'center',
    justifyContent: 'center',
  },
  textBtn: {
    color: '#ffff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});