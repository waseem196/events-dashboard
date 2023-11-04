export const properDateAndTime = (str) => {
  const date = new Date(str);

  const dateOptions = { year: 'numeric', month: '2-digit', day: '2-digit' };
  const timeOptions = { hour: '2-digit', minute: '2-digit' };

  const formattedDateTime =
    date.toLocaleString(undefined, dateOptions) +
    ' ' +
    date.toLocaleString(undefined, timeOptions);

  return formattedDateTime.split(' ');
};
