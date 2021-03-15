import firebase from 'firebase/app';
import 'firebase/storage';
import 'firebase/auth';
import fireConfig from './fireConfig';
/*
konfigurace firebase
*/
firebase.initializeApp(fireConfig);

export default firebase;