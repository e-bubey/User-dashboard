import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "./UserContext";

export default function Navbar() {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  return (
    <nav style={{ padding: 12, background: "#333", color: "white", display: "flex", gap: 20, alignItems: "center" }}>
      <span>{user?.username} - {user?.role}</span>
      <Link to="/dashboard" style={{ color: "white" }}>Dashboard</Link>
      <Link to="/profile" style={{ color: "white" }}>Profile</Link>
      {user?.role === "Admin" && <Link to="/settings" style={{ color: "white" }}>Settings</Link>}
      <button onClick={() => { logout(); navigate("/login"); }} style={{ marginLeft: "auto" }}>
        Logout
      </button>
    </nav>
  );
}