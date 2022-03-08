import axios from "axios";
import { store } from "../index";
import { addNotificationAction } from "../state/notifications/notificaiton.actions";

const instance = axios.create({
  baseURL: "http://localhost:3000/api",
});

instance.interceptors.request.use(
  function (config) {
    console.log("inside request interceptor");
    // Do something before request is sent

    const token = sessionStorage.getItem("token");
    if (token) {
      config.headers["Authorization"] = `Bearer ${token}`;
    }

    return config;
  },
  function (error) {
    // Do something with request error
    return Promise.reject(error);
  }
);

instance.interceptors.response.use(
  function (response) {
    console.log("inside response interceptor");
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data
    return response;
  },
  function (error) {
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error
    console.log(error.response.status);
    const {
      status,
      data: { message },
    } = error.response;
    if (status >= 400) {
      // throw notification when error 4xx or 5xx
      store.dispatch(addNotificationAction(message));
    }
    return Promise.reject(error);
  }
);

export default instance;
