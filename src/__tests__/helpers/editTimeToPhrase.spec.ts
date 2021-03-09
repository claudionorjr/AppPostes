// Receive type date: 2020-02-24T18:12:43.794Z
import editTimeToPhrase from '../../helpers/editTimeToPhrase';

const newDate = new Date();
const newYear = newDate.getFullYear();

const newMonth = newDate.getMonth() + 1;
const newMonthLess = newDate.getMonth();

const newDay = newDate.getDate();

const newHour = newDate.getHours();

const newMinutes = newDate.getMinutes();

const newSeconds = newDate.getSeconds();

const dateYearAgo = `${newYear - 1}-${newMonthLess}-24T18:12:43.794Z`;
const dateYearsAgo = `${newYear - 2}-${newMonthLess}-24T18:12:43.794Z`;
const returnYearAgo = 'Postado à mais de 1 ano';
const returnYearsAgo = 'Postado à mais de 2 anos';

const dateMonthAgo = `${newYear}-${newMonthLess}-${newDay}T18:12:43.794Z`;
const dateMonthsAgo = `${newYear}-${newMonth - 2}-${newDay - 1}T18:12:43.794Z`;
const returnMonthAgo = 'Postado à mais de 1 mês';
const returnMonthsAgo = 'Postado à mais de 2 meses';

const dateDayAgo = `${newYear}-${newMonth}-${newDay}T${
  newHour - 1
}:${newMinutes}:00.794Z`;
const dateDaysAgo = `${newYear}-${newMonth}-${newDay - 2}T${
  newHour - 1
}:${newMinutes}:00.794Z`;
const dateDaysCalcNegative = `${newYear}-${newMonth}-${
  newDay + 3
}T00:01:00.794Z`;
const returnDayAgo = 'Postado à 1 dia';
const returnDaysAgo = 'Postado à 3 dias';

const dateHourAgo = `${newYear}-${newMonth}-${newDay}T${newHour}:${newMinutes}:00.794Z`;

const dateMinutesAgo = `2021-${newMonth}-${newDay}T${newHour}:${
  newMinutes > 20 ? newMinutes - 10 : newMinutes - 1
}:${newSeconds > 11 ? newSeconds - 10 : newSeconds - 1}.794Z`;

describe('editTimeToPhrase helper', () => {
  it('Should be retorned message of the one year ago', () => {
    const response = editTimeToPhrase(dateYearAgo);
    expect(response).toBe(returnYearAgo);
  });

  it('Should be retorned message of the more years ago', () => {
    const response = editTimeToPhrase(dateYearsAgo);
    expect(response).toBe(returnYearsAgo);
  });

  it('Should be retorned message of the one month ago', () => {
    const response = editTimeToPhrase(dateMonthAgo);
    expect(response).toBe(returnMonthAgo);
  });

  it('Should be retorned message of the more months ago', () => {
    const response = editTimeToPhrase(dateMonthsAgo);
    expect(response).toBe(returnMonthsAgo);
  });

  it('Should be retorned message of the one day ago negative calc', () => {
    const response = editTimeToPhrase(dateDaysCalcNegative);
    expect(response).toBeTruthy();
  });

  it('Should be retorned message of the one day ago', () => {
    const response = editTimeToPhrase(dateDayAgo);
    expect(response).toBe(returnDayAgo);
  });

  it('Should be retorned message of the more days ago', () => {
    const response = editTimeToPhrase(dateDaysAgo);
    expect(response).toBe(returnDaysAgo);
  });

  it('Should be retorned message of the one hour ago', () => {
    const response = editTimeToPhrase(dateHourAgo);
    expect(response).toBeTruthy();
  });

  it('Should be retorned message of the one minutes ago', () => {
    const response = editTimeToPhrase(dateMinutesAgo);
    expect(response).toBeTruthy();
  });
});
