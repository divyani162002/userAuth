import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import LoginForm from "./page/login";
import RegisterForm from "./page/register";
import Dashboard from "./page/dashboard";


const App = () => {
  const PrivateRoute = ({ children }) => {
    const token = localStorage.getItem("token");
    if (!token) {
      return <Navigate to="/login" />;
    }
    return children;
  };

  return (
    <Router>
      <Routes>
        <Route path="/login" element={<LoginForm />} />
        <Route path="/register" element={<RegisterForm />} />
        <Route
          path="/dashboard"
          element={
            <PrivateRoute>
              <Dashboard />
            </PrivateRoute>
          }
        />
        <Route path="/" element={<Navigate to="/login" />} />
      </Routes>
    </Router>
  );
};

export default App;
