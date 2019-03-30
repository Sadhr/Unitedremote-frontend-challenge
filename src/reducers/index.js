import { combineReducers } from "redux";
import repos from "./repositories_reducer";

const rootReducer = combineReducers({ repos });

export default rootReducer;
