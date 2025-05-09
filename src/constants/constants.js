export const REQUEST_METHOD = {
    GET: 'GET',
    PUT: 'PUT',
    POST: 'POST',
    DELETE: 'DELETE'
}

export const DROP_DOWN_VALUES = {
    SORT_BY:'',
    TITLE: 'title-desc',
    RELEASE_DATE_CHRON: 'release-date-chron',
    RATING_DESC: 'rating-desc'
}

export const DROPDOWN_OPTIONS = [
    {
        label: 'Sort by',
        value: DROP_DOWN_VALUES.SORT_BY
    },
    {
        label: 'Title ↓',
        value: DROP_DOWN_VALUES.TITLE
    },
    {
        label: 'Release Date ↓',
        value: DROP_DOWN_VALUES.RELEASE_DATE_CHRON
    },
    {
        label: 'Rating ↓',
        value: DROP_DOWN_VALUES.RATING_DESC
    }
]