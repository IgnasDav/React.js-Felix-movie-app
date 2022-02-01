import { createContext, useState } from "react";

const DEFAULT_TOKEN = false;
const DEFAULT_TOKEN_SUCCESS = localStorage.getItem("token") || "";
const DEFAULT_TOKEN_ERROR = null;

const AuthContext = createContext({
  token: DEFAULT_TOKEN_SUCCESS,
  loading: DEFAULT_TOKEN,
  error: DEFAULT_TOKEN_ERROR,
});

const AuthProvider = ({ children }) => {
  const [token, setToken] = useState(DEFAULT_TOKEN_SUCCESS);
  const [loading, setLoading] = useState(DEFAULT_TOKEN);
  const [error, setError] = useState(DEFAULT_TOKEN_ERROR);
  localStorage.setItem("token", token);
  return (
    <AuthContext.Provider
      value={{ token, setToken, loading, setLoading, error, setError }}
    >
      {children}
    </AuthContext.Provider>
  );
};
export default AuthContext;
export { AuthProvider };
