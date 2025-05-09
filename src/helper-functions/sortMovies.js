import { DROP_DOWN_VALUES } from "../constants/constants";

export const getSelectValue = () => {
  const dropdown = document.getElementById("sort");

  if (!dropdown) {
    return "";
  }

  return dropdown.value;
};

export const sortByRatingsDesc = (data) => {
  return data.sort((a, b) => {
    if (a.vote_average > b.vote_average) {
      return -1;
    }

    if (a.vote_average < b.vote_average) {
      return 1;
    }

    return 0;
  });
};

export const sortByTitleDesc = (data) => {
  return data.sort((a, b) => {
    const aTitle = a.title.toLowerCase();
    const bTitle = b.title.toLowerCase();

    if (aTitle < bTitle) {
      return -1;
    }

    if (aTitle > bTitle) {
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
      return sortByRatingsDesc(data);
    case DROP_DOWN_VALUES.RELEASE_DATE_CHRON:
    case DROP_DOWN_VALUES.TITLE:
      sortByTitleDesc(data);
    default:
      return data;
  }
};
