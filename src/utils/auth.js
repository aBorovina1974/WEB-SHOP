import cookies from "js-cookie";

export const setUserCookie = (userCookie) => {
  //Made just for test how it works
  let inFifteenMinutes = new Date(new Date().getTime() + 15 * 60 * 1000);
  cookies.set("user", userCookie, {
    expires: inFifteenMinutes,
  });

  // cookies.set("user", userCookie);
};

export const removeUserCookie = () => {
  cookies.remove("user");
};

export const getUserCookie = () => {
  return cookies.get("user");
};
