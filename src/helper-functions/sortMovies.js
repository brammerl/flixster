import { DROP_DOWN_VALUES } from "../constants/constants";

export const getSelectValue = () => {
  const dropdown = document.getElementById("sort");

  if (!dropdown) {
    return "";
  }

  return dropdown.value;
};

export const sortByDesc = (data, key) => {
  return data.sort((a, b) => {
    const aKey = a[key];
    const bKey = b[key];

    if (aKey > bKey) {
      return -1;
    }

    if (aKey < bKey) {
      return 1;
    }

    return 0;
  });
};

export const sortByAsc = (data, key) => {
  return data.sort((a, b) => {
    const aKey = a[key];
    const bKey = b[key];

    if (aKey < bKey) {
      return -1;
    }

    if (aKey > bKey) {
      return 1;
    }

    return 0;
  });
};

export const sortMovies = (data, sortQuery) => {
  switch (sortQuery) {
    case DROP_DOWN_VALUES.SORT_BY:
      return data;
    case DROP_DOWN_VALUES.RATING_DESC:
      return sortByDesc(data, "vote_average");
    case DROP_DOWN_VALUES.RELEASE_DATE_CHRON:
      return sortByDesc(data, "release_date");
    case DROP_DOWN_VALUES.TITLE:
      sortByAsc(data, "title");
    default:
      return data;
  }
};
