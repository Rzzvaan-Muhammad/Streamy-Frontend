import { combineReducers } from "redux";
import AuthReducer from "./Auth2reducers";
import StreamReducer from "./streamReducer";
import { reducer as reducerForm } from "redux-form";
export default combineReducers({
  Auth: AuthReducer,
  form: reducerForm,
  streams: StreamReducer,
});
