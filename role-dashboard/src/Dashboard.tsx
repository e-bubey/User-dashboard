import { useAuth } from "./UserContext";
import Navbar from "./Navbar";

export default function Dashboard() {
  const { user, logout } = useAuth();

 return (
  <div style={{minHeight: '100vh', backgroundColor: '#f3f4f6'}}>
    <Navbar />
    
    <div style={{display: 'flex', justifyContent: 'center', paddingTop: '60px'}}>
      <div style={{
        backgroundColor: 'white',
        padding: '40px 30px',
        borderRadius: '16px',
        boxShadow: '0 10px 25px rgba(0,0,0,0.1)',
        width: '100%',
        maxWidth: '420px',
        textAlign: 'center'
      }}>
        <h2 style={{fontSize: '24px', fontWeight: 'bold', marginBottom: '12px'}}>
          Welcome, {user?.username}!
        </h2>
        <p style={{fontSize: '16px', marginBottom: '8px'}}>{user?.role}</p>
        {user?.role === "Admin" && <p>You can delete and remove everything</p>}
        {user?.role === "Editor" && <p>You can edit and format content</p>}
         {user?.role === "Viewer" && <p>You can only view content you're subscribed to</p>}
        {/* { <button onClick={logout}>Logout</button> } */}
      </div>
    </div>
  </div>
);

  // return (
  //   <>
  //     <Navbar />
  //     <div className="card">
  //       <h2>Welcome, {user?.username}!</h2>
  //       <div className={`role-badge role-${user?.role.toLowerCase()}`}>
  //         {user?.role}
  //       </div>
  //       {user?.role === "Admin" && <p>You can delete and remove everything</p>}
  //       {user?.role === "Editor" && <p>You can edit and format content</p>}
  //       {user?.role === "Viewer" && <p>You can only view content you're subscribed r</p>}
  //       {/* { <button onClick={logout}>Logout</button> } */}
  //     </div>
  //   </>
  // );
}