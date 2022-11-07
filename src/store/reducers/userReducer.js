import { USER_DATA } from "../actions/actionTypes";

const initialState = {
  userData: {
    name: "",
  },
};

export default function userReducer(state = initialState, action) {
  switch (action.type) {
    case USER_DATA: {
      return {
        ...state,
        userData: {
          name: action.payload,
        },
      };
    }
    default:
      return state;
  }
}
