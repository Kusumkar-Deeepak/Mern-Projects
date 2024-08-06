import { createContext, useState, useEffect } from 'react';

const AuthContext = createContext();

// eslint-disable-next-line react/prop-types
export const AuthProvider = ({ children }) => {
  const [auth, setAuth] = useState({ user: null, token: null });

  useEffect(() => {
    const token = localStorage.getItem('token');
    let user = null;

    try{
      user = JSON.parse(localStorage.getItem('user'));
    }catch(e){
      console.error('Error parsing user from localStorage:', e.message);
    }
    if (token && user) {
      setAuth({ token, user });
    }
  }, []);

  const login = (user, token) => {
    setAuth({ user, token });
    localStorage.setItem('token', token);
    localStorage.setItem('user', JSON.stringify(user));
  };

  const logout = () => {
    setAuth({ user: null, token: null });
    localStorage.removeItem('token');
    localStorage.removeItem('user');
  };

  return (
    <AuthContext.Provider value={{ auth, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
