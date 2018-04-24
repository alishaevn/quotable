import React, { Component } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import firebase from 'firebase'

import Home from './src/components/Home'

import * as styles from './src/styles'


export default class App extends Component {

  render() {
    return (
      <View style={styles.container}>
        <Home />
      </View>
    );
  }
}

/*
Resources:
 - https://github.com/davideast/firebase-react-native-sample
*/