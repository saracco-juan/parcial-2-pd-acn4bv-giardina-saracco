import { Navigate } from "react-router-dom";
import { AuthService } from "../../services/auth";

const AdminRoute = ({ children }) => {
  const isAuthenticated = AuthService.isAuthenticated();
  const isAdmin = AuthService.isAdmin();

  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }

  if (!isAdmin) {
    return <Navigate to="/home" replace />;
  }

  return children;
};

export default AdminRoute;
