import firebase from 'firebase/app';

import 'bootstrap';
import '../styles/main.scss';

import auth from './components/auth/auth';
import MyNavbar from './components/MyNavbar/MyNavbar';
import authData from './helpers/data/authData';

import apiKeys from './helpers/apiKeys.json';
import friends from './components/friends/friends';


const init = () => {
  firebase.initializeApp(apiKeys.firebaseKeys);
  MyNavbar.navbarEvents();
  authData.checkLoginStatus();
  auth.printAuth();
  friends.showFriends();
};

init();
