const editTimeToPhrase = (str: string): string => {
  const newDate = new Date();
  const newDay = newDate.getDate() + 1;
  const newMonth = newDate.getMonth() + 1;
  const newYear = newDate.getFullYear();
  const newHours = newDate.getHours();
  const newMinutes = newDate.getMinutes();

  const parsed = String(str).split('T');
  const parsedDate = parsed[0].split('-');
  const parsedDateTimeZone = parsed[1].split('.');
  const parsedDateTime = parsedDateTimeZone[0].split(':');
  const newTimeZone =
    Number(parsedDateTime[0]) > 2
      ? Number(parsedDateTime[0]) - 3
      : Number(parsedDateTime[0]) === 0
      ? 21
      : Number(parsedDateTime[0]) === 1
      ? 22
      : Number(parsedDateTime[0]) === 2
      ? 23
      : 0;

  if (newYear - Number(parsedDate[0]) > 0) {
    const monthOrMonths =
      newYear - Number(parsedDate[0]) === 1 ? ' ano' : ' anos';
    return `Postado à mais de ${
      newYear - Number(parsedDate[0])
    }${monthOrMonths}`;
  }

  if (newMonth - Number(parsedDate[1]) > 0) {
    const monthOrMonths =
      newMonth - Number(parsedDate[1]) === 1 ? ' mês' : ' meses';
    return `Postado à mais de ${
      newMonth - Number(parsedDate[1])
    }${monthOrMonths}`;
  }

  if (
    Number(parsedDate[2]) - newDay > 0 ||
    newDay - Number(parsedDate[2]) > 0
  ) {
    const calcSmaller = newDay - Number(parsedDate[2]);
    const calclarger = Number(parsedDate[2]) - newDay;
    const resultSum = calcSmaller < 0 ? calclarger : calcSmaller;
    const dayOrDays = resultSum === 1 ? ' dia' : ' dias';
    return `Postado à ${resultSum}${dayOrDays}`;
  }

  if (newHours - newTimeZone > 0) {
    const hourOrHours = newHours - newTimeZone === 1 ? ' hora' : ' horas';
    return `Postado à ${newHours - newTimeZone}${hourOrHours}`;
  }

  if (newMinutes - Number(parsedDateTime[1]) >= 0) {
    const minuteOrMinutes =
      newMinutes - Number(parsedDateTime[1]) === 1 ? ' minuto' : ' minutos';
    return `Postado à ${
      newMinutes - Number(parsedDateTime[1])
    }${minuteOrMinutes}`;
  }
  return '';
};

export default editTimeToPhrase;
