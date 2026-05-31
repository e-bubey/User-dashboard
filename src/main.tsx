import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthProvider } from "./UserContext";
import Login from "./Login";
import Dashboard from "./Dashboard";
import Profile from "./Profile";
import Settings from "./Settings";
import ProtectedRoute from "./protect";
import "./styles.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/dashboard" element={<ProtectedRoute><Dashboard /></ProtectedRoute>} />
          <Route path="/profile" element={<ProtectedRoute><Profile /></ProtectedRoute>} />
          <Route path="/settings" element={<ProtectedRoute allowedRoles={["Admin"]}><Settings /></ProtectedRoute>} />
          <Route path="*" element={<Login />} />
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  </React.StrictMode>
);