import React, { Component } from 'react'
import { Text, View } from 'react-native'
import { TabNavigator, TabBarBottom } from 'react-navigation'
import { Ionicons } from 'react-native-vector-icons'
import firebase from 'firebase'
import DoubleClick from 'react-native-double-click'

import { firebaseApp } from '../config'
import * as styles from '../styles'

/* ======================
 HOME COMPONENT
 ====================== */
class Home extends Component {
  constructor() {
    super()
    this.state = {
      quote: '',
      author: ''
    }
  }
  
  componentDidMount() {
    const todayString = () => {
      let today = new Date();
      let dd = today.getDate();
      let mm = today.getMonth() + 1;

      if (dd < 10) {
        dd = '0' + dd;
      }

      if (mm < 10) {
        mm = '0' + mm;
      }
      return `${mm}/${dd}`;
    };

    const today = todayString()
    const firebaseDb = firebaseApp.database().ref()

    firebaseDb.on('value', snap => { // snap.val() will show me my current database
      const qotd =  snap.val().qotd.find(obj => obj.date === today)

      this.setState({
        quote: qotd.quote,
        author: qotd.author
      })
    })
  }

  saveQuote = () => {
    const uid = firebase.auth().currentUser.uid
    
    firebaseApp.database().ref().child('users').push({
        quote: this.state.quote,
        author: this.state.author,
        uid
      })
  }

  render() {

    return (
      <View style={styles.container} >
        <DoubleClick onClick={() => this.saveQuote()} >
          <Text style={styles.quote}>{ this.state.quote }</Text>
          <Text style={styles.author}>{ this.state.author }</Text>
        </DoubleClick>
      </View>
    );
  }
}


/* ======================
 PROFILE COMPONENT
 ====================== */
class Profile extends React.Component {

  componentDidMount() {
    
  }

  render() {
    const user = firebase.auth().currentUser
    let name, email, photoUrl /* uid, emailVerified */

    if (user !== null) {
      name = user.displayName ? user.displayName : ''
      email = user.email
      photoUrl = user.photoURL ? user.photoURL : ''
      // uid = user.uid
      // emailVerified = user.emailVerified
    }

    return (
      <View style={styles.container}>
        <Text>Name: { name }</Text>
        <Text>Email: { email}</Text>
        <Text>Photo: { photoUrl }</Text>
        <Text></Text>
        <Text onPress={() => firebase.auth().signOut()}>Sign Out</Text>
      </View>
    );
  }
}


/* ======================
 TABS
 ====================== */
export default TabNavigator(
  {
    Home: { screen: Home },
    Profile: { screen: Profile },
  },
  {
    navigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused, tintColor }) => {
        const { routeName } = navigation.state;
        let iconName;
        if (routeName === 'Home') {
          iconName = `ios-home${focused ? '' : '-outline'}`;
        } else if (routeName === 'Profile') {
          iconName = `ios-person${focused ? '' : '-outline'}`;
        }

        // You can return any component that you like here! We usually use an icon component from react-native-vector-icons
        return <Ionicons name={iconName} size={25} color={tintColor} />;
      },
      }),
      tabBarOptions: {
        activeTintColor: 'tomato',
        inactiveTintColor: 'gray',
      },
      tabBarComponent: TabBarBottom,
      tabBarPosition: 'bottom',
      animationEnabled: false,
      swipeEnabled: false,
    });

/*
Resources: 
  // HOME
  - https://www.npmjs.com/package/react-native-double-click

  // PROFILE
  - https://firebase.google.com/docs/reference/js/firebase.auth.Auth?authuser=0#signOut
  - https://firebase.google.com/docs/auth/web/manage-users
  
  // TABS
  - https://reactnavigation.org/docs/tab-based-navigation.html
  - https://oblador.github.io/react-native-vector-icons/
  - http://discuss.nativebase.io/t/where-to-get-the-list-of-icon-names-used-in-native-base/37/8

*/