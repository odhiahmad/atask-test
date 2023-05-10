import { combineReducers } from "redux";
import { searchUser } from "./user";

const rootReducer = combineReducers({
  searchUser,
});

export default rootReducer;
