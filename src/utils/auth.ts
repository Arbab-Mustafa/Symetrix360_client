import brain from "brain";
import { AuthResponse } from "utils/types";

interface AdminAuth {
  isAuthenticated: boolean;
  login: (username: string, password: string) => Promise<boolean>;
  logout: () => void;
}

// Create a simple auth utility to handle admin authentication
const useAdminAuth = (): AdminAuth => {
  const AUTH_KEY = "symetrix_admin_auth";
  
  const isAuthenticated = (): boolean => {
    const authData = localStorage.getItem(AUTH_KEY);
    return authData === "true";
  };

  const login = async (username: string, password: string): Promise<boolean> => {
    try {
      const response = await brain.admin_auth({ username, password });
      const data: AuthResponse = await response.json();
      
      if (data.success) {
        localStorage.setItem(AUTH_KEY, "true");
        return true;
      }
      return false;
    } catch (error) {
      console.error("Authentication error:", error);
      return false;
    }
  };

  const logout = (): void => {
    localStorage.removeItem(AUTH_KEY);
  };

  return {
    isAuthenticated: isAuthenticated(),
    login,
    logout
  };
};

export default useAdminAuth;