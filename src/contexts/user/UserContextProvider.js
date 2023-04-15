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

  // sign out the user, memoized
  const signOut = useCallback(() => {
    setUser(initUser);
  }, []);

  // memoize the full context value
  const contextValue = useMemo(
    () => ({
      user,
      setUser,
      signOut,
    }),
    [user, setUser, signOut]
  );

  return (
    // the Provider gives access to the context to its children
    <UserContext.Provider value={contextValue}>{children}</UserContext.Provider>
  );
};

export { UserContext, UserProvider };
