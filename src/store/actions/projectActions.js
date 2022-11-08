import globalBaseUrl from "../../helpers/globalBaseUrl";
import errorHandler from "../../helpers/errorHandler";
import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { USER_DETAIL, USER_PROJECTS } from "./actionTypes";

export const createProject = (payload) => {
  return async () => {
    try {
      const access_token = await AsyncStorage.getItem("access_token");
      const { data } = await axios({
        method: "POST",
        url: globalBaseUrl + "/users/projects",
        headers: { access_token },
        data: payload,
      });
      return data;
    } catch (error) {
      errorHandler(error);
    }
  };
};

export const getMyProjects = () => {
  return async (dispatch, getState) => {
    try {
      const access_token = await AsyncStorage.getItem("access_token");
      let { data } = await axios({
        method: "GET",
        url: globalBaseUrl + "/users/projects",
        headers: { access_token },
      });
      console.log(data)
      const newData = data.map((el) => {
        const acceptedWorker = el.ProjectWorkers.filter(
          (e) => e.status === "Accepted"
        ).length;
        return {
          ...el,
          acceptedWorker,
        };
      });
      dispatch({
        type: USER_PROJECTS,
        payload: newData,
      });
      return data;
    } catch (error) {
      errorHandler(error);
    }
  };
};

export const getProject = (ProjectId) => {
  return async (dispatch, getState) => {
    try {
      const access_token = await AsyncStorage.getItem("access_token");
      let { data } = await axios({
        method: "GET",
        url: globalBaseUrl + `/users/projects/${ProjectId}`,
        headers: { access_token },
      });
      const acceptedWorker = data.ProjectWorkers.filter(
        (el) => el.status === "Accepted"
      );
      data.acceptedWorker = acceptedWorker;
      dispatch({
        type: USER_DETAIL,
        payload: data,
      });
      return data;
    } catch (error) {
      errorHandler(error);
    }
  };
};

export const acceptWorker = (payload) => {
  return async (dispatch, getState) => {
    try {
      const access_token = await AsyncStorage.getItem("access_token");
      let { data } = await axios({
        method: "PATCH",
        url: globalBaseUrl + `/users/projects/accept/${payload.WorkerId}`,
        headers: { access_token },
        data: { ProjectId: payload.ProjectId },
      });

      return data;
    } catch (error) {
      errorHandler(error);
    }
  };
};

export const declineWorker = (payload) => {
  return async (dispatch, getState) => {
    try {
      const access_token = await AsyncStorage.getItem("access_token");
      let { data } = await axios({
        method: "PATCH",
        url: globalBaseUrl + `/users/projects/decline/${payload.WorkerId}`,
        headers: { access_token },
        data: { ProjectId: payload.ProjectId },
      });

      return data;
    } catch (error) {
      errorHandler(error);
    }
  };
};

export const createRatings = (payload) => {
  return async (dispatch, getState) => {
    try {
      const access_token = await AsyncStorage.getItem("access_token");
      let { data } = await axios({
        method: "POST",
        url: globalBaseUrl + `/users/projects/rate`,
        headers: { access_token },
        data: { value: payload.value, ProjectId: payload.ProjectId },
      });
      return data;
    } catch (error) {
      errorHandler(error);
    }
  };
};

export const createPayment = (payload) => {
  return async (dispatch, getState) => {
    try {
      const access_token = await AsyncStorage.getItem("access_token");
      let { data } = await axios({
        method: "POST",
        url: globalBaseUrl + `/payments`,
        headers: { access_token },
        data: { cost: payload.cost, ProjectId: payload.ProjectId },
      });
      return data;
    } catch (error) {
      errorHandler(error);
    }
  };
};
