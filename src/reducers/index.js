/* eslint-disable no-unused-vars */
import changeTheNumber from "./upDown";
import changeTheMul from "./mulDiv";
import { combineReducers } from "redux";

const rootReducer = combineReducers({
  changeTheNumber,
  changeTheMul,
});

export default rootReducer;
