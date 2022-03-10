export const getUsersLanguage = (): string => {
  let language;
  if (window.navigator.languages) {
    language = window.navigator.languages[0];
  } else {
    language = window.navigator.language;
  }
  return language;
};

// Returns the month names for the user's language
export const getUsersMonths = (): string[] => {
  const usersLanguage = getUsersLanguage();
  var getMonth = function (idx: number) {

    var objDate = new Date();
    objDate.setDate(1);
    objDate.setMonth(idx - 1);

    var locale = usersLanguage ?? "en-us",
      month = objDate.toLocaleString(locale, { month: "long" });

    return month;
  }

  const months = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map(getMonth);

  return months;
}