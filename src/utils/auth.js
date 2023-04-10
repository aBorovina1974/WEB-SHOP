import cookies from "js-cookie";

export const setUserCookie = (userCookie) => {
  cookies.set("user", userCookie);
};

export const removeUserCookie = () => {
  cookies.remove("user");
  // to support logging out from all windows
  window.localStorage.setItem("logout", Date.now().toString());
};

export const getUserCookie = () => {
  return cookies.get("user");
};
