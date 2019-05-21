import '../styles/main.scss';
import 'bootstrap';
import auth from './components/auth/auth';
import birthday from './components/birthday/birthday';

const init = () => {
  auth.printAuth();
  birthday.printBirthday();
};

init();
