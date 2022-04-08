import { Cookies } from "react-cookie";

const setCookies = (cookieName, cookieValue) => {
//   var date = new Date();
//   var time = date.getTime();
  var cookies = new Cookies();
  cookies.set(cookieName, cookieValue, {
    path: "/",
    expires: new Date(Date.now() + 5000),
  });
};

export default setCookies;
