import { USER_DATA, USER_LOCATION } from "../actions/actionTypes";

const initialState = {
  userData: {
    name: "",
    location: "",
  },
};

export default function userReducer(state = initialState, action) {
  switch (action.type) {
    case USER_DATA: {
      return {
        ...state,
        userData: {
          ...state.userData,
          name: action.payload,
        },
      };
    }
    case USER_LOCATION: {
      return {
        ...state,
        userData: {
          ...state.userData,
          location: action.payload,
        },
      };
    }
    default:
      return state;
  }
}
