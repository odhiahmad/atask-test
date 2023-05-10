import { put, takeLatest } from "redux-saga/effects";
import {
  SEARCH_USER_PROCESS,
  SEARCH_USER_SUCCESS,
  SEARCH_USER_ERROR,
  SEARCH_USER,
} from "../../actions/user";
import { filterFetch } from "./../../../utils/apiFetch";
import { API_TIMEOUT, API_URL_WEB } from "./../../../utils/constant";

function* searchUser(action) {
  yield put({
    type: SEARCH_USER_PROCESS,
  });
  try {
    const result = yield filterFetch(API_URL_WEB + "api/auth/login", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      timeout: API_TIMEOUT,
      body: JSON.stringify(action.data),
    });
    yield put({
      type: SEARCH_USER_SUCCESS,
      result: result,
    });
  } catch (error) {
    yield put({
      type: SEARCH_USER_ERROR,
      error: error,
    });
  }
}

export function* watchLogin() {
  yield takeLatest(SEARCH_USER, searchUser);
}
