import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";
import errorHandler from "../../helpers/errorHandler";
import globalBaseUrl from "../../helpers/globalBaseUrl";
import { DETAIL_WORKER, WORKER_BY_CATEGORY } from "./actionTypes";

export const workersById = (CategoryId) => {
  return async (dispatch, getState) => {
    try {
      const access_token = await AsyncStorage.getItem("access_token");
      const { data } = await axios({
        method: "GET",
        url: globalBaseUrl + `/users/workers/${CategoryId}`,
        headers: { access_token },
      });
      dispatch({
        type: WORKER_BY_CATEGORY,
        payload: data,
      });
      return data;
    } catch (error) {
      errorHandler(error);
    }
  };
};

export const getWorker = (WorkerId) => {
  return async (dispatch, getState) => {
    try {
      const access_token = await AsyncStorage.getItem("access_token");
      const { data } = await axios({
        method: "GET",
        url: globalBaseUrl + `/users/workers/profile/${WorkerId}`,
        headers: { access_token },
      });
      dispatch({
        type: DETAIL_WORKER,
        payload: data,
      });
      return data;
    } catch (error) {
      errorHandler(error);
    }
  };
};
