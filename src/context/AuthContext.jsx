import  { createContext, useState, useContext, useEffect } from "react";
const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem("authToken");
    if (token) {
      setIsAuthenticated(true); // Eğer token varsa, kullanıcıyı oturum açmış olarak işaretle
    }
  }, []);

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
