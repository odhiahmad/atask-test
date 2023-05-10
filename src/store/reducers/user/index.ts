import {
  SEARCH_USER_PROCESS,
  SEARCH_USER_SUCCESS,
  SEARCH_USER_ERROR,
  SEARCH_USER_RESET,
} from "../../actions/user";

const initState = {
  result: null,
  loading: false,
};
type Action = any;

export function searchUser(state = initState, action: Action) {
  switch (action.type) {
    case SEARCH_USER_PROCESS:
      return {
        ...initState,
        loading: true,
        result: null,
        error: null,
      };
    case SEARCH_USER_SUCCESS:
      return {
        ...state,
        result: action.result,
        loading: false,
        error: null,
      };
    case SEARCH_USER_ERROR:
      return {
        ...state,
        error: action.error,
        loading: false,
        result: null,
      };
    case SEARCH_USER_RESET:
      return initState;
    default:
      return state;
  }
}
