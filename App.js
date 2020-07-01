import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Alert, StyleSheet, Text, View, TextInput, Button } from 'react-native';
import Nav from './Nav';

export default class App extends React.Component {

  constructor(props) {
    super(props);
    
    this.state = {
      username: '',
      password: '',
    };
  }

  onLogin() {
    const { username, password } = this.state;

    Alert.alert('Credentials', `${username} + ${password}`);
  }

  render() {
    return (
      <View style={styles.main}>
        <Nav />
        <View style={styles.loginContainer}>
        <Text style={styles.title}>Login</Text>

        <TextInput
          value={this.state.username}
          onChangeText={(username) => this.setState({ username })}
          placeholder={'Username'}
          style={styles.textInput}
        />
        <TextInput
          value={this.state.password}
          onChangeText={(password) => this.setState({ password })}
          placeholder={'Password'}
          secureTextEntry={true}
          style={styles.textInput}
        />
        
        <View style={styles.buttonContainer}>
        <Button
          title={'Submit'}
          style={styles.submitButton}
          onPress={this.onLogin.bind(this)}
          color="#27A2F8"
        />

        <Button
          title={'Sign Up'}
          style={styles.signUpButton}
          onPress={this.onLogin.bind(this)}
          color="#FF6600"
          />
          </View>

        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  main: {
    backgroundColor: '#fff',
  },
  loginContainer: {
    flex: 1,
    margin: 'auto',
    alignItems: 'center',
    justifyContent: 'center',
    borderColor: '#000',
  },
  title: {
    fontWeight: 'bold',
    alignContent: 'flex-start',
    fontSize: 28,
    marginVertical: 20,
  },
  textInput: {
    backgroundColor: '#DDDDDD',
    fontSize: 16,
    padding: 10,
    marginTop: 10,
  },
  buttonContainer: {
    padding: 20,
  },
  submitButton: {
    padding: 10,
    margin: 10,
    backgroundColor: '#27A2F8'
  },
  signUpButtonText: {
    padding: 10,
    backgroundColor: '#FF6600'
  }
});