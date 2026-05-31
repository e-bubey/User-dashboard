import { useAuth } from "./UserContext";
import Navbar from "./Navbar";

export default function Profile() {
  const { user } = useAuth();
  
  return (
    <>
      <Navbar />
      <div className="card">
        <h2>Profile Page</h2>
        <p><b>Name:</b> {user?.username}</p>
        <p><b>Role:</b> {user?.role}</p>
      </div>
    </>
  );
}