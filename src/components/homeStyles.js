const React = require('react-native')
const { StyleSheet } = React


var styles = StyleSheet.create({

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
    marginTop: 25,
    borderTopWidth: 2,
    borderTopColor: '#5EB1BF',
    paddingTop: 10
  },
  quoteBlock: {
    width: 300,
    borderStyle: 'solid',
    borderWidth: 1,
    backgroundColor: '#042A2B',
    borderRadius: 4,
    margin: 10,
    paddingHorizontal: 20,
    paddingVertical: 70
  },
  profileQuote: {
    textAlign: 'center',
    fontSize: 18,
    color: '#FFFFFF'
  },
  profileAuthor: {
    textAlign: 'center',
    fontStyle: 'italic',
    fontSize: 16,
    color: '#5EB1BF',
    marginTop: 20
  },
  signOut: {
    marginBottom: 15
  }
})


module.exports = styles

/*
Resources:
 - https://github.com/vhpoet/react-native-styling-cheat-sheet#text
 - https://coolors.co/042a2b-5eb1bf-54f2f2-f4e04d-ffffff
*/