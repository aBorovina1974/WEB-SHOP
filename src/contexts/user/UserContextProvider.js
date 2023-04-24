import {
  createContext,
  useCallback,
  useEffect,
  useMemo,
  useState,
} from "react";
import { getUserCookie } from "../../utils/auth";

const UserContext = createContext(null);

const initUser = {
  email: "",
  first_name: "",
  last_name: "",
  newsletter: false,
};

const UserProvider = ({ children }) => {
  const [user, setUser] = useState(initUser);

  useEffect(() => {
    const userCookie = getUserCookie();
    if (userCookie) {
      setUser(JSON.parse(userCookie));
    }
  }, []);

  const signOut = useCallback(() => {
    setUser(initUser);
  }, []);

  const contextValue = useMemo(
    () => ({
      user,
      setUser,
      signOut,
    }),
    [user, setUser, signOut]
  );

  return (
    <UserContext.Provider value={contextValue}>{children}</UserContext.Provider>
  );
};

export { UserContext, UserProvider };
