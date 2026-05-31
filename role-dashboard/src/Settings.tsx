import Navbar from "./Navbar";

export default function Settings() {
  return (
    <>
      <Navbar />
      <div className="card">
        <h2>Settings Page</h2>
        <p>Only Admins can see this </p>
        <p>Delete user, change roles, and carry out inside task</p>
      </div>
    </>
  );
}