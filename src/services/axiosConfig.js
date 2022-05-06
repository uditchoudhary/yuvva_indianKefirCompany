import axios from "axios";
import getCookies from "../Utilities/Cookies/getCookies";

const authInstance = axios.create({
  baseURL: process.env.REACT_APP_AUTH_API,
});
authInstance.defaults.withCredentials = true;
const instance = axios.create({
  baseURL: process.env.REACT_APP_AUTH,
});

export { authInstance, instance };
