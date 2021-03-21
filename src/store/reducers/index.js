import { combineReducers } from "redux";
import { photosReducer } from "./photosReducer";
import { commentsReducer } from "./commentReducer";

const rootReducer = combineReducers({
  photosReducer,
  commentsReducer,
});
export default rootReducer;
