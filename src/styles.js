const React = require('react-native')
const { StyleSheet } = React

const constants = {
  actionColor: '#24CE84'
};

var styles = StyleSheet.create({
  // LOGIN
  loginPage: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    // marginHorizontal: 30,
    backgroundColor: '#042A2B',
  },
  logo: {
    resizeMode: 'center',
    // marginBottom: 0
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
  },

  // HOME
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: 30
  },
  homeQuote:{
    fontSize: 30,
    fontWeight: '400',
    textAlign: 'center',
    color: '#042A2B'
  },
  homeAuthor: {
    fontSize: 18,
    color: 'gray',
    fontStyle: 'italic',
    textAlign: 'center',
    marginTop: 20,
    marginBottom: 50
  },
   heart: {
    color: '#042A2B'
  },

  // PROFILE
  profile: {
    flex: 1,
    marginHorizontal: 20,
    marginVertical: 50,
  },
  quotesBox: {
    justifyContent: 'center',
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    width: 350,
    marginTop: 25
  },
  quoteBlock: {
    width: 300,
    borderStyle: 'solid',
    borderWidth: 1,
    borderColor: 'red',
    borderRadius: 4,
    margin: 10,
    paddingHorizontal: 20,
    paddingVertical: 70
  },
  profileQuote: {
    textAlign: 'center',
    fontSize: 18
  },
  profileAuthor: {
    textAlign: 'center',
    fontStyle: 'italic',
    fontSize: 14,
    color: 'grey'
  },
 
  action: {
    backgroundColor: constants.actionColor,
    borderColor: 'transparent',
    borderWidth: 1,
    paddingLeft: 16,
    paddingTop: 14,
    paddingBottom: 16,
  },
})


module.exports = styles
module.exports.constants = constants;

/*
Resources:
 - https://github.com/vhpoet/react-native-styling-cheat-sheet#text
 - https://coolors.co/042a2b-5eb1bf-54f2f2-f4e04d-ffffff
*/