export const SEARCH_USER_PROCESS = "SEARCH_USER_PROCESS";
export const SEARCH_USER_SUCCESS = "SEARCH_USER_SUCCESS";
export const SEARCH_USER_ERROR = "SEARCH_USER_ERROR";
export const SEARCH_USER_RESET = "SEARCH_USER_RESET";
export const SEARCH_USER = "SEARCH_USER";

type DataSearch = any;

export function searchUser(data: DataSearch) {
  let TYPE = data.reset ? SEARCH_USER_RESET : SEARCH_USER;
  return {
    type: TYPE,
    data: data,
  };
}
