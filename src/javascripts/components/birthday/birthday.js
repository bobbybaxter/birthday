import util from '../../helpers/util';

const printBirthday = () => {
  let domString = '';
  domString += '<h1>Birthday</h1>';
  util.printToDom('birthday', domString);
};

export default { printBirthday };
