import cookies from "js-cookie";

export const setUserCookie = (userCookie) => {
  let inTwoHours = new Date(new Date().getTime() + 120 * 60 * 1000);
  cookies.set("user", userCookie, {
    expires: inTwoHours,
  });

  // cookies.set("user", userCookie);
};

export const removeUserCookie = () => {
  cookies.remove("user");
};

export const getUserCookie = () => {
  return cookies.get("user");
};
