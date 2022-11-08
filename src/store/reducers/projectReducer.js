import { USER_DETAIL, USER_PROJECTS } from "../actions/actionTypes";

const initialState = {
  myProjects: [],
  project: {},
};

export default function projectReducer(state = initialState, action) {
  switch (action.type) {
    case USER_PROJECTS: {
      return {
        ...state,
        myProjects: action.payload,
      };
    }
    case USER_DETAIL: {
      return {
        ...state,
        project: action.payload,
      };
    }
    default:
      return state;
  }
}
