import React, { Component } from 'react'
import { Text, View, ScrollView } from 'react-native'
import { TabNavigator, TabBarBottom } from 'react-navigation'
import { Ionicons } from 'react-native-vector-icons'
import firebase from 'firebase'
import DoubleClick from 'react-native-double-click'

import { firebaseApp } from '../config'
import * as styles from '../styles'

const firebaseDb = firebaseApp.database().ref()


/* ======================
 HOME COMPONENT
 ====================== */
class Home extends Component {
  constructor() {
    super()
    this.state = {
      quote: '',
      author: '',
      clicked: false
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

    firebaseDb.on('value', snap => { // snap.val() will show me my current database
      // FIND THE QUOTE OF THE DAY
      const qotd =  snap.val().qotd.find(obj => obj.date === today)

      this.setState({
        quote: qotd.quote,
        author: qotd.author
      })

      // CHECK TO SEE IF THE USER HAS LIKED THIS QUOTE
      const uid = firebase.auth().currentUser.uid
      let usersProp =  snap.val().users // entire users object
      let objectToArray = Object.values(usersProp) // array of user objects
      let userQuotes = objectToArray.filter(obj => obj.uid === uid) // array of objects that the user added
      let found = userQuotes.find(obj => obj.quote === this.state.quote) // will be empty if the user hasn't liked the quote 

      if (found !== []) {
        this.setState({
          clicked: true
        })
      }

    })
  }

  // SAVE THE QUOTE TO THE DB WITH THE USER'S ID
  saveQuote = () => {
    const uid = firebase.auth().currentUser.uid
    
    firebaseDb.child('users').push({ 
        quote: this.state.quote,
        author: this.state.author,
        uid
      })

    this.setState({
      clicked: true
    })
    
  }

  render() {

    let iconName = this.state.clicked ? 'ios-heart' : 'ios-heart-outline'

    return (
      <View style={styles.container} >
        <DoubleClick onClick={() => this.saveQuote()} >
          <Text style={styles.homeQuote}>{ this.state.quote }</Text>
          <Text style={styles.homeAuthor}>{ this.state.author }</Text>
        </DoubleClick>
        <Ionicons name={iconName} size={25} />
      </View>
    );
  }
}


/* ======================
 PROFILE COMPONENT
 ====================== */
class Profile extends React.Component {
  constructor() {
    super()
    this.state = {
      userQuotes: []
    }
  }

  componentDidMount() {
    // RETRIEVE USER'S QUOTES
    firebaseDb.on('value', snap => { 
      const uid = firebase.auth().currentUser.uid

      let usersProp =  snap.val().users // entire users object
      let objectToArray = Object.values(usersProp) // array of user objects
      let userQuotes = objectToArray.filter(obj => obj.uid === uid) // array of objects that the user added

      this.setState({
        userQuotes
      })
    })
  }

  render() {
    const user = firebase.auth().currentUser
    let name, photoUrl /* email */

    if (user !== null) {
      name = user.displayName ? user.displayName : ''
      photoUrl = user.photoURL ? user.photoURL : ''
      // email = user.email
    }

    // LIST EACH QUOTE INSIDE OF A VIEW
    let printToScreen = this.state.userQuotes.map((obj, index) => (
        <View style={styles.quoteBlock} key={index} >
          <Text style={styles.profileQuote}>{ obj.quote }</Text>
          <Text style={styles.profileAuthor}>{ obj.author }</Text>
      </View>
      ))

    return (
      <View style={styles.profile}>
        <Text onPress={() => firebase.auth().signOut()}>Sign Out</Text>
        <Text>Name: { name }</Text>
        {/* <Text>Email: { email}</Text> */}
        <Text>Photo: { photoUrl }</Text>

        <View style={styles.quotesBox}>
          <ScrollView>
            { printToScreen }
          </ScrollView>
        </View>
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
  - https://firebase.google.com/docs/database/web/read-and-write

  // PROFILE
  - https://firebase.google.com/docs/reference/js/firebase.auth.Auth?authuser=0#signOut
  - https://firebase.google.com/docs/auth/web/manage-users
  
  // TABS
  - https://reactnavigation.org/docs/tab-based-navigation.html
  - https://oblador.github.io/react-native-vector-icons/
  - http://discuss.nativebase.io/t/where-to-get-the-list-of-icon-names-used-in-native-base/37/8

*/