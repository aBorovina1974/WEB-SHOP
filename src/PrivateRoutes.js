import { Navigate } from "react-router-dom";
import { useContext } from "react";
import { UserContext } from "./contexts/user/UserContextProvider";

const PrivateRoutes = ({ children }) => {
  const { user } = useContext(UserContext);

  return user.email.length > 0 ? children : <Navigate to="/protected" />;
};

export default PrivateRoutes;
