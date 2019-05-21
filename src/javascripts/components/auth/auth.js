import firebase from 'firebase/app';
import 'firebase/auth'; // attaches a bunch of auth methods to the firebase import, must be written after first firebase import

import util from '../../helpers/util';

import googleImage from './googlebutton.png';

const signMeIn = () => {
  const provider = new firebase.auth.GoogleAuthProvider();
  firebase.auth().signInWithPopup(provider);
};

const printAuth = () => {
  let domString = '';
  domString += '<button id="google-auth" class="btn">';
  domString += `<img src="${googleImage}" />`;
  domString += '</button>';
  util.printToDom('auth', domString);
  document.getElementById('google-auth').addEventListener('click', signMeIn);
};

export default { printAuth };
