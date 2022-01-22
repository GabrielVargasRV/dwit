
import firebase from 'firebase'
import 'firebase/firestore'
import 'firebase/auth'
import firebaseConfig from './firebaseConfig'

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
export const googleAuthProvider = new firebase.auth.GoogleAuthProvider()
export const db = firebase.firestore()
export const auth = firebase.auth()