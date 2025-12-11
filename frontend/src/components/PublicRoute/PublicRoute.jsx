import { Navigate } from "react-router-dom";
import { AuthService } from "../../services/auth";


const PublicRoute = ({ children }) => {
  const isAuthenticated = AuthService.isAuthenticated();

  if (isAuthenticated) {
    return <Navigate to="/home" replace />;
  }
  return children;
};

export default PublicRoute;
