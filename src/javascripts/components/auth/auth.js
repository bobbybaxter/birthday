import util from '../../helpers/util';

const printAuth = () => {
  let domString = '';
  domString += '<h1>Auth</h1>';
  util.printToDom('auth', domString);
};

export default { printAuth };
