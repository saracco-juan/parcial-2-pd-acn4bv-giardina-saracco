import { Navigate } from "react-router-dom";
import { AuthService } from "../../services/auth";

/**
 * Componente que protege rutas solo para administradores
 * Redirige a /home si el usuario no es admin
 */
const AdminRoute = ({ children }) => {
  const isAuthenticated = AuthService.isAuthenticated();
  const isAdmin = AuthService.isAdmin();

  if (!isAuthenticated) {
    // Si no está autenticado, redirigir al login
    return <Navigate to="/login" replace />;
  }

  if (!isAdmin) {
    // Si está autenticado pero no es admin, redirigir a home
    return <Navigate to="/home" replace />;
  }

  // Si es admin, mostrar el componente hijo
  return children;
};

export default AdminRoute;
