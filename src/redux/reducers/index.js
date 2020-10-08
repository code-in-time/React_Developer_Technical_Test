import { combineReducers } from "redux";
import todo from "./todo";
import todo2 from "./todo2";
import Breeds from './Breeds'

export default combineReducers({
  todo,
  todo2,
  Breeds
});