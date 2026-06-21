import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import RegistrationPage from "./pages/RegistrationPage";
import ResetPasswordPage from "./pages/ResetPasswordPage";
import DashboardLayout from "./layouts/DashboardLayout";
import ProtectedRoute from "./components/ProtectedRoute";
import Courses from "./pages/courses";
import Dashboard from "./pages/Dashboard";
import Profile from "./pages/Profile.jsx";
import Opportunities from "./pages/Opportunities.jsx";
import Home from "./pages/Home.jsx";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/login" replace />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegistrationPage />} />
        <Route path="/reset-password" element={<ResetPasswordPage />} />

        <Route
          path="/home"
          element={
            <ProtectedRoute>
              <DashboardLayout />
            </ProtectedRoute>
          }>
            <Route index element={<Home />} />
            <Route path="dashboard" element={<Dashboard />} />
            <Route path="opportunities" element={<Opportunities />} />
            <Route path="courses" element={<Courses />} />
            <Route path="profile" element={<Profile />} />
          </Route>

      </Routes>
    </BrowserRouter>
  );
}

export default App;