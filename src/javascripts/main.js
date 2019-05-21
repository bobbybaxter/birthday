import firebase from 'firebase/app';

import 'bootstrap';
import '../styles/main.scss';

import auth from './components/auth/auth';
import birthday from './components/birthday/birthday';
import MyNavbar from './components/MyNavbar/MyNavbar';
import authData from './helpers/data/authData';

import apiKeys from './helpers/apiKeys.json';

const init = () => {
  firebase.initializeApp(apiKeys.firebaseKeys);
  MyNavbar.navbarEvents();
  authData.checkLoginStatus();
  auth.printAuth();
  birthday.printBirthday();
};

init();
