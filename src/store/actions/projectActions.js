import globalBaseUrl from "../../helpers/globalBaseUrl";
import errorHandler from "../../helpers/errorHandler";
import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";

export const createProject = (payload) => {
  return async () => {
    try {
      const access_token = await AsyncStorage.getItem("access_token")
      const { data } = await axios({
        method: "POST",
        url: globalBaseUrl + "/users/projects",
        headers: {access_token},
        data: payload,
      });
      return data;
    } catch (error) {
      errorHandler(error);
    }
  };
};