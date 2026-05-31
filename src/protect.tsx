import { Navigate } from "react-router-dom";
import { useAuth } from "./UserContext";

export default function ProtectedRoute({ 
  children, 
  allowedRoles 
}: { 
  children: React.ReactNode; 
  allowedRoles?: string[] 
}) {
  const { user } = useAuth();
  console.log(user);

  if (!user) return <Navigate to="/login" replace />;
  
  if (allowedRoles && !allowedRoles.includes(user.role)) {
    return <Navigate to="/dashboard" replace />;
  }

  return <>{children}</>;
}