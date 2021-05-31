import { combineReducers } from "redux";
import AuthReducer from "./AuthReducer";

const AppReducers = combineReducers({
  auth: AuthReducer,
});

export default AppReducers;
