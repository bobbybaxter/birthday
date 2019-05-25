import util from '../../helpers/util';
import birthdayData from '../../helpers/data/birthdayData';

const printBirthday = (uid) => {
  birthdayData.getBirthdayByUid(uid).then((birthday) => {
    let domString = '';
    domString += '<div class="card col-6 m-2 shadow">';
    domString += '<div class="card-body">';
    domString += `<h5 class="card-title">${birthday.location} @ ${birthday.time}</h5>`;
    domString += `<h6>${birthday.date}</h6>`;
    domString += `<img class="card-img" src="${birthday.imageUrl}" alt="honky tonk central photo" />`;
    domString += '</div>';
    domString += '</div>';
    util.printToDom('event', domString);
  }).catch(err => console.error('could not get birthday', err));
};

export default { printBirthday };
