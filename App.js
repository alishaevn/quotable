import React, { Component } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import firebase from 'firebase'

import Home from './src/components/Home'
import { API_KEY, MESSAGING_SENDER_ID } from './src/config'
import Login from './src/components/Login'

import * as styles from './src/styles'

export default class App extends Component {
constructor() {
    super()
    this.state = {
      loading: true
    }
  }
  
  componentDidMount() {
    this.authSubscription = firebase.auth().onAuthStateChanged((user) => {
      this.setState({
        loading: false,
        user,
      })
    })
  }

  componentWillUnmount() {
    this.authSubscription();
  }

  render() {
    
    if (this.state.loading) return null // The application is loading
    if (this.state.user) return <Home /> // The user is logged in (not null) so redirect Home
    return <Login /> // The user is logged out (null) so redirect to the login page
  }
  
}

/*
Resources:
 - https://github.com/davideast/firebase-react-native-sample
*/