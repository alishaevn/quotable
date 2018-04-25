import React, { Component} from 'react'
import { Text, View, TextInput, Button } from 'react-native'
import firebase from 'firebase'

import * as styles from '../styles'


export default class Login extends Component {
  constructor() {
    super()
    this.state = {
      registering: false
    }
  }

  onLogin = () => {
  const { email, password } = this.state;
  firebase.auth().signInWithEmailAndPassword(email, password)
    .catch((error) => {
      const { code, message } = error;
      // The message contains the default Firebase string representation of the error
      if (code === 'auth/wrong-password') {
        alert('Wrong password.');
      } else {
        alert(message);
      }
    });
}

onRegister = () => {
  const { email, password } = this.state;
  firebase.auth().createUserWithEmailAndPassword(email, password)
    .catch((error) => {
      const { code, message } = error;
      // The message contains the default Firebase string representation of the error
      if (code === 'auth/weak-password') {
        alert('The password is too weak.');
      } else {
        alert(message);
      }
    });
}

  render() {
   
    let button;
    let registerMessage;

    if(this.state.registering) {
      button = (<Button
          onPress={() => this.onRegister()}
          title="Register"
          accessibilityLabel="Register for Quotable"
        />)
        registerMessage = (
        <Text
          onPress={() => this.setState({registering: false})}
        >
          Click here to Login
        </Text>)
    } else {
      button = (<Button
          onPress={() => this.onLogin()}
          title="Login"
          accessibilityLabel="Log in to Quotable"
        />)
      registerMessage = (
        <Text
          onPress={() => this.setState({registering: true})}
        >
          Click here to register
        </Text>)
    }

    return(
      <View style={styles.container}>

        <Text style={styles.text}>Email</Text>
        <TextInput
          style={styles.inputField}
          onChangeText={(email) => this.setState({email})}
          value={this.state.email}
        />

        <Text style={styles.text}>Password</Text>
        <TextInput
          style={styles.inputField}
          onChangeText={(password) => this.setState({password})}
          value={this.state.password}
        />

        { button }
        { registerMessage }

      </View>
    )
  }

}

/*
 Resources:
 - https://blog.invertase.io/getting-started-with-firebase-authentication-on-react-native-a1ed3d2d6d91

 - https://firebase.google.com/docs/reference/js/firebase.auth.Auth?authuser=0#createUserWithEmailAndPassword

 - https://facebook.github.io/react-native/docs/components-and-apis.html
  
 */