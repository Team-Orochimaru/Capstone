import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { withRouter, Route, Switch } from 'react-router-dom';
import { Alert, StyleSheet, Text, View, TextInput, Button } from 'react-native';

export default class Routes extends React.Component {

    componentDidMount() {
    }

    render() {
    return (
        <View style={styles.container}>
            <Text style={styles.header}>App Name</Text>
        </View>
    )
    }
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#FF6600',
    },
    header: {
        fontSize: 36,
        color: '#fff',
        padding: 30,
        fontWeight: '700',
        textAlign: 'center',
    }
  });