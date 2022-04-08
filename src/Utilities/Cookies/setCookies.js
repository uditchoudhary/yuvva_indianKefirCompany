import { Cookies } from "react-cookie";

const setCookies = (cookieName, cookieValue) => {
    console.log("inside set Cookies: ",cookieName, cookieValue)
  Cookies(cookieName, cookieValue, { path: "/" });
};

export default setCookies;
