import { WORKER_BY_CATEGORY } from "../actions/actionTypes";

const initialState = {
  workers: []
}

export default function workerReducer(state = initialState, action){
  switch (action.type) {
    case WORKER_BY_CATEGORY: {
      return {
        ...state,
        workers: action.payload
      };
    }
    default:
      return state
  }
}