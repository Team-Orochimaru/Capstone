import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Alert, StyleSheet, Text, View, TextInput, Button } from 'react-native';
import Nav from './Nav';
import Login from './Components/Login';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import AccountOverview from './Components/AccountOverview';

const Stack = createStackNavigator();
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="AccountOverview" component={AccountOverview} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  main: {},
  loginContainer: {
    backgroundColor: '#fff',
    padding: 30,
  },
  title: {
    fontWeight: 'bold',
    fontSize: 28,
    marginTop: 20,
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
    backgroundColor: '#27A2F8',
  },
  signUpButton: {
    backgroundColor: '#27A2F8',
  },
});
