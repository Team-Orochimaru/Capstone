import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Alert, StyleSheet, Text, View, TextInput, Button } from 'react-native';
import Nav from './Nav';
import Routes from './Routes';

const App = () => {
  return (
    <View>
      <Nav />
      <Routes />
    </View>
  )
}

export default App;