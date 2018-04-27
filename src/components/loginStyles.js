const React = require('react-native')
const { StyleSheet } = React


var styles = StyleSheet.create({
  loginPage: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#042A2B',
  },
  logo: {
    resizeMode: 'center',
  },
   loginText: {
    fontSize: 18,
    color: '#FFFFFF'
  },
  inputField: {
    height: 40, 
    width: 200,
    borderColor: '#FFFFFF', 
    borderWidth: 1,
    borderRadius: 5,
    marginTop: 10,
    marginBottom: 20,
    backgroundColor: '#FFFFFF'
  },
  loginButton: {
    color: '#FFFFFF'
  },
  registerMessage: {
    color: '#FFFFFF'
  }
})


module.exports = styles

/*
Resources:
 - https://github.com/vhpoet/react-native-styling-cheat-sheet#text
 - https://coolors.co/042a2b-5eb1bf-54f2f2-f4e04d-ffffff
*/