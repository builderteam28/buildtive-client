import {
  legacy_createStore as createStore,
  combineReducers,
  applyMiddleware,
} from "redux";
import thunk from "redux-thunk";
import userReducer from "./reducers/userReducer"
import workerReducer from "./reducers/workerReducer";
import projectReducer from "./reducers/projectReducer";
import paymentReducer from "./reducers/paymentReducer";
import ratingReducer from "./reducers/ratingReducer";
import categoryReducer from "./reducers/categoryReducer";

const rootReducer = combineReducers({
  user: userReducer,
  worker: workerReducer,
  project: projectReducer,
  payment: paymentReducer,
  rating: ratingReducer,
  category: categoryReducer
});

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store