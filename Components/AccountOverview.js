import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Alert, StyleSheet, Text, View, TextInput, Button } from 'react-native';

export default function AccountOverview() {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Account Overview</Text>
    </View>
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
