import React, { Component} from 'react'
import { Text, View, TextInput } from 'react-native'
// import firebase from 'firebase'
// import firebaseui from 'firebaseui'



import * as styles from '../styles'

export default class Login extends Component {
  constructor() {
    super()
    this.state = {

    }
  }

  render() {
    // console.log('email:', this.state.email)

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

        <Text style={styles.text}>Phone Number</Text>
        <TextInput
          style={styles.inputField}
          onChangeText={(phoneNumber) => this.setState({phoneNumber})}
          value={this.state.phoneNumber}
        />

      </View>
      
    )
  }

}