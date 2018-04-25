import React, { Component } from 'react'
import { Text, View } from 'react-native'
import { TabNavigator, TabBarBottom } from 'react-navigation'
import { Ionicons } from 'react-native-vector-icons'

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
    const firebaseDb = firebaseApp.database().ref()

    firebaseDb.on('value', snap => {
      const quoteObj =  snap.val()[0]
      this.setState({
        quote: quoteObj.quote,
        author: quoteObj.author
      })
    })
  }


  render() {

    return (
      <View style={styles.container}>
        <Text>{this.state.quote}</Text>
        <Text>{this.state.author}</Text>
      </View>
    );
  }
}


/* ======================
 PROFILE COMPONENT
 ====================== */
class Profile extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Settings!</Text>
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
 - https://reactnavigation.org/docs/tab-based-navigation.html
 - https://oblador.github.io/react-native-vector-icons/
 - http://discuss.nativebase.io/t/where-to-get-the-list-of-icon-names-used-in-native-base/37/8


*/