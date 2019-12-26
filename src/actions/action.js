import {
  FETCH_DATA_REQUEST,
  FETCH_DATA_SUCCESS,
  FETCH_DATA_ERROR,
  ON_PAGE_CHANGED_ACTION,
  CHANGE_PAGE_LIMIT
} from "./actionType";

export function fetchDataRequest() {
  return {
    type: FETCH_DATA_REQUEST
  };
}

export function fetchDataSuccess(allCountries) {
  return {
    type: FETCH_DATA_SUCCESS,
    allCountries
  };
}

export function fetchDataError(error) {
  return {
    type: FETCH_DATA_ERROR,
    error
  };
}

export function onPageChangedAction(currentPage) {
  return {
    type: ON_PAGE_CHANGED_ACTION,
    currentPage
  };
}

export function changePageLimit(pageLimit) {
  return {
    type: CHANGE_PAGE_LIMIT,
    pageLimit
  };
}
