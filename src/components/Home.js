import React, { Component } from 'react'
import { StyleSheet, Text, View } from 'react-native'

import * as styles from '../styles'

export default class Home extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Welcome to Quotable!</Text>
      </View>
    );
  }
}