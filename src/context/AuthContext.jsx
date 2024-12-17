import  { createContext, useState, useContext } from "react";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  // Giriş yapıldığında çağrılır
  const login = (token) => {
    localStorage.setItem("authToken", token); // Token'ı sakla
    setIsAuthenticated(true); // Kullanıcıyı oturum açmış olarak işaretle
  };

  // Çıkış yapıldığında çağrılır
  const logout = () => {
    localStorage.removeItem("authToken"); // Token'ı sil
    setIsAuthenticated(false); // Kullanıcıyı oturum kapatmış olarak işaretle
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
