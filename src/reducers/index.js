import { combineReducers } from "redux";

// Reducers
import logReducer from "./logReducer";
import techReducer from "./techReducer";

// All my reducers are exported from here
export default combineReducers({
  log: logReducer,
  tech: techReducer,
});
