import {
  legacy_createStore as createStore,
  combineReducers,
  applyMiddleware,
} from "redux";
import thunk from "redux-thunk";
import userReducer from "./reducers/userReducer";
import workerReducer from "./reducers/workerReducer";
import projectReducer from "./reducers/projectReducer";

const rootReducer = combineReducers({
  user: userReducer,
  worker: workerReducer,
  project: projectReducer,
});

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
