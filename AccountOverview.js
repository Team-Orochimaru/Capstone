import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Alert, StyleSheet, Text, View, TextInput, Button } from 'react-native';
import Nav from './Nav';

export default class AccountOverview extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <View style={styles.main}>
        <Nav />
        <View style={styles.accountOverviewContainer}>
            <Text>Hello world!</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  accountOverviewContainer: {
        loginContainer: {
        backgroundColor: '#fff',
        padding: 30,
      }
  }
});