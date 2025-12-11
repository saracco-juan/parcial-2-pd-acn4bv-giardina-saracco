import { Route, Routes, Navigate } from "react-router-dom";
import Home from "./views/Home/Home";
import Dashboard from "./views/Dashboard/Dashboard";
import Login from "./views/login/Login";
import Layout from "./views/Layout/Layout";
import Register from "./views/Register/Register";
import ProtectedRoute from "./components/ProtectedRoute/ProtectedRoute";
import PublicRoute from "./components/PublicRoute/PublicRoute";
import AdminRoute from "./components/AdminRoute/AdminRoute";
import Category from "./views/Category/Category";
import TestFont from "./views/Font/TestFont";
import { ToastProvider } from "./context/ToastContext";

function App() {
  return (
    <ToastProvider>
      <Routes>
      <Route element={<Layout />}>
        <Route
          path="/"
          element={
            <PublicRoute>
              <Login />
            </PublicRoute>
          }
        />
        <Route
          path="/home"
          element={
            <ProtectedRoute>
              <Home />
            </ProtectedRoute>
          }
        />
        <Route
          path="/dashboard"
          element={
            <AdminRoute>
              <Dashboard />
            </AdminRoute>
          }
        />
            
        <Route
          path="/testfont"
          element={
            <ProtectedRoute>
              <TestFont />
            </ProtectedRoute>
          }
        />

        <Route
          path="/login"
          element={
            <PublicRoute>
              <Login />
            </PublicRoute>
          }
        />
        <Route
          path="/register"
          element={
            <PublicRoute>
              <Register />
            </PublicRoute>
          }
        />

        <Route path="*" element={<Navigate to="/login" replace />} />
        <Route
          path="/category"
          element={
            <ProtectedRoute>
              <Category />
            </ProtectedRoute>
          }
        />
      </Route>
    </Routes>
    </ToastProvider>
  );
}

export default App;
