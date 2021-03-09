const capitalize = (str: string): string =>
  str.charAt(0).toUpperCase() + str.substr(1);

const capitalizedString = (toCapitalize: string): string => {
  const newString = toCapitalize.toLowerCase();
  return capitalize(newString);
};

export default capitalizedString;
