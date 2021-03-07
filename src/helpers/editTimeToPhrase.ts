const editTimeToPhrase = (date: Date): string => {
  const newDate = new Date();
  const newDay = newDate.getDay();
  const newMonth = newDate.getMonth() + 1;
  const newYear = newDate.getFullYear();
  const newHours = newDate.getHours();
  const newMinutes = newDate.getMinutes();
  // 2020-12-27T18:34:50.597Z
  const parsed = String(date).split('T');
  const parsedDate = String(parsed[0]).split('-');
  const parsedDateTimeZone = String(parsed[1]).split('.');
  const parsedDateTime = String(parsedDateTimeZone[0]).split(':');

  if (newYear - Number(parsedDate[0]) > 0) {
    return `Postado à mais de ${newYear - Number(parsedDate[0])} anos`;
  }

  if (newMonth - Number(parsedDate[1]) > 0) {
    return `Postado à mais de ${newMonth - Number(parsedDate[1])} meses`;
  }

  if (newDay - Number(parsedDate[2]) <= 31) {
    return `Postado à ${newDay - Number(parsedDate[2])} dias`;
  }

  if (newHours - Number(parsedDateTime[1]) <= 23) {
    return `Postado à ${newDay - Number(parsedDateTime[2])} horas`;
  }

  if (newMinutes - Number(parsedDateTime[2]) <= 59) {
    return `Postado à ${newDay - Number(parsedDateTime[2])} minutos`;
  }
};

export default editTimeToPhrase;
