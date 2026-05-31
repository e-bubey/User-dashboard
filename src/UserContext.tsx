import { createContext, useContext, useState } from "react";

type Role = "Admin" | "Editor" | "Viewer";

type User = {
  username: string;
  role: Role;
} | null;

const AuthContext = createContext<any>(null);

export function AuthProvider({ children }: any) {
  const [user, setUser] = useState<User>(null);

  const login = (username: string, role: Role) => {
    const userData = {username: username, role: role};
      localStorage.setItem('user', JSON.stringify(userData));
      console.log(localStorage.getItem('user'));
      setUser({ username, role });
  };

  const logout = () => {
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext);
}