import firebase from 'firebase'

export const firebaseConfig = {
    apiKey: "AIzaSyCS6lttqUddFOl9WmbVR3uliYtjDs8SyRg",
    authDomain: "quotable-97756.firebaseapp.com",
    databaseURL: "https://quotable-97756.firebaseio.com",
    projectId: "quotable-97756",
    storageBucket: "quotable-97756.appspot.com",
    messagingSenderId: "36011798297"
  };

export const firebaseApp = firebase.initializeApp(firebaseConfig)