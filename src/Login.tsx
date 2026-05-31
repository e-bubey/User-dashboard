import { useAuth } from "./UserContext";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

export default function Login() {
  const [name, setName] = useState("");
  const [role, setRole] = useState("Viewer");
  const { user, login } = useAuth();
  const navigate = useNavigate();

  // When you login it goes to the dashboard
  if (user) {
    navigate("/dashboard");
    return null;
  }

  const handleSubmit = () => {
    if (!name) return alert("Enter a name");
    login(name, role as any);
    navigate("/dashboard");
     //This would redirect you after login
  };

  return (
    <div className="card">
      <h2>Login</h2>
      <input 
        placeholder="Username" 
        value={name} 
        onChange={(e) => setName(e.target.value)} 
      />
      <select value={role} onChange={(e) => setRole(e.target.value)}>
        <option>Admin</option>
        <option>Editor</option>
        <option>Viewer</option>
      </select>
      <button onClick={handleSubmit}>Login</button>
    </div>
  );
}