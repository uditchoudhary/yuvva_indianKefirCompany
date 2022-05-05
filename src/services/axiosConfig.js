import axios from "axios";
import getCookies from "../Utilities/Cookies/getCookies";

const authInstance = axios.create({
  baseURL: process.env.REACT_APP_AUTH_API,
});
authInstance.defaults.headers.common["Authorization"] = `Bearer ${getCookies(
  "ACCESS_TOKEN"
)}`;

const instance = axios.create({
  baseURL: process.env.REACT_APP_AUTH,
});

export { authInstance, instance };
