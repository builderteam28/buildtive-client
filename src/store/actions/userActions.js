import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";
import errorHandler from "../../helpers/errorHandler";
import globalBaseUrl from "../../helpers/globalBaseUrl";
import { USER_DATA } from "./actionTypes";

export const createUser = (payload) => {
  return async (dispatch, getState) => {
    try {
      console.log(payload);
    } catch (error) {
      console.error(error.message);
    }
  };
};

export const loginUser = (payload) => {
  return async (dispatch, getState) => {
    try {
      const { data } = await axios({
        method: "POST",
        url: globalBaseUrl + "/users/login",
        data: payload,
      });
      await AsyncStorage.setItem("access_token", data.access_token);
      dispatch({
        type: USER_DATA,
        payload: data.name,
      });
      return data;
    } catch (error) {
      errorHandler(error);
    }
  };
};
