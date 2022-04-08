import { Cookies } from "react-cookie";

const getCookies = (cookieName) => {
  return Cookies[cookieName];
};

export default getCookies;
