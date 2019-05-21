import firebase from 'firebase/app';

import '../styles/main.scss';
import 'bootstrap';

import auth from './components/auth/auth';
import birthday from './components/birthday/birthday';

import apiKeys from './helpers/apiKeys.json';

const init = () => {
  firebase.initializeApp(apiKeys.firebaseKeys);
  auth.printAuth();
  birthday.printBirthday();
};

init();
