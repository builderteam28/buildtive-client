import { DETAIL_WORKER, WORKER_BY_CATEGORY } from "../actions/actionTypes";

const initialState = {
  workers: [],
  worker: {},
};

export default function workerReducer(state = initialState, action) {
  switch (action.type) {
    case WORKER_BY_CATEGORY: {
      return {
        ...state,
        workers: action.payload,
      };
    }
    case DETAIL_WORKER: {
      return {
        ...state,
        worker: action.payload,
      };
    }
    default:
      return state;
  }
}
