import { Cookies } from "react-cookie";

const removeCookies = (cookieName) => {
  var cookies = new Cookies();
  const a = cookies.remove(cookieName);
  console.log(a);
  return cookies.remove(cookieName);
};

export default removeCookies;
