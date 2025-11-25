import React, { createContext, useContext, useState, useEffect } from 'react';
import { mockUser, mockTickets } from '../utils/mockData';

const UserContext = createContext();

export const useUser = () => {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error('useUser must be used within a UserProvider');
  }
  return context;
};

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [tickets, setTickets] = useState([]);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  // Initialize with mock data (in real app, this would come from API)
  useEffect(() => {
    // Simulate checking if user is logged in
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      setUser(JSON.parse(storedUser));
      setIsAuthenticated(true);
      // Load user's tickets
      const storedTickets = localStorage.getItem('tickets');
      if (storedTickets) {
        setTickets(JSON.parse(storedTickets));
      } else {
        setTickets(mockTickets);
        localStorage.setItem('tickets', JSON.stringify(mockTickets));
      }
    } else {
      // For demo purposes, auto-login with mock user
      setUser(mockUser);
      setIsAuthenticated(true);
      setTickets(mockTickets);
      localStorage.setItem('user', JSON.stringify(mockUser));
      localStorage.setItem('tickets', JSON.stringify(mockTickets));
    }
  }, []);

  const login = (email, password) => {
    // Mock login - in real app, this would be an API call
    setUser(mockUser);
    setIsAuthenticated(true);
    setTickets(mockTickets);
    localStorage.setItem('user', JSON.stringify(mockUser));
    localStorage.setItem('tickets', JSON.stringify(mockTickets));
    return { success: true };
  };

  const signup = (name, email, password) => {
    // Mock signup - in real app, this would be an API call
    const newUser = {
      id: Date.now(),
      name,
      email,
      phone: '',
      avatar: `https://ui-avatars.com/api/?name=${encodeURIComponent(name)}&background=1D4ED8&color=fff`
    };
    setUser(newUser);
    setIsAuthenticated(true);
    setTickets([]);
    localStorage.setItem('user', JSON.stringify(newUser));
    localStorage.setItem('tickets', JSON.stringify([]));
    return { success: true };
  };

  const logout = () => {
    setUser(null);
    setIsAuthenticated(false);
    setTickets([]);
    localStorage.removeItem('user');
    localStorage.removeItem('tickets');
  };

  const updateProfile = (updatedData) => {
    const updatedUser = { ...user, ...updatedData };
    setUser(updatedUser);
    localStorage.setItem('user', JSON.stringify(updatedUser));
  };

  const addTicket = (ticket) => {
    const newTickets = [...tickets, ticket];
    setTickets(newTickets);
    localStorage.setItem('tickets', JSON.stringify(newTickets));
  };

  const value = {
    user,
    tickets,
    isAuthenticated,
    login,
    signup,
    logout,
    updateProfile,
    addTicket
  };

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};

