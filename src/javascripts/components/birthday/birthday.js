import util from '../../helpers/util';
import birthdayData from '../../helpers/data/birthdayData';

const printBirthday = (uid) => {
  birthdayData.getBirthdayByUid(uid).then((birthday) => {
    let domString = '';
    domString += `<h1>${birthday.date}</h1>`;
    domString += `<img src="${birthday.imageUrl}" alt="honky tonk central photo" />`;
    domString += `<p>${birthday.location} @ ${birthday.time}</p>`;
    util.printToDom('event', domString);
  }).catch(err => console.error('could not get birthday', err));
};

export default { printBirthday };
