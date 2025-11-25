import { Link, useNavigate } from 'react-router-dom';
import { useUser } from '../context/UserContext';
import { useState } from 'react';

const Navbar = () => {
  const { user, isAuthenticated, logout } = useUser();
  const [showMenu, setShowMenu] = useState(false);
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/');
    setShowMenu(false);
  };

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-xl">E</span>
            </div>
            <span className="text-xl font-bold text-gray-900">EventHub</span>
          </Link>

          {/* Navigation Links */}
          <div className="hidden md:flex items-center space-x-8">
            <Link
              to="/"
              className="text-gray-700 hover:text-primary transition-colors font-medium"
            >
              Home
            </Link>
            <Link
              to="/events"
              className="text-gray-700 hover:text-primary transition-colors font-medium"
            >
              Events
            </Link>
            {isAuthenticated && (
              <>
                <Link
                  to="/tickets"
                  className="text-gray-700 hover:text-primary transition-colors font-medium"
                >
                  Tickets
                </Link>
                <Link
                  to="/profile"
                  className="text-gray-700 hover:text-primary transition-colors font-medium"
                >
                  Profile
                </Link>
              </>
            )}
          </div>

          {/* User Menu */}
          <div className="relative">
            {isAuthenticated ? (
              <div className="flex items-center space-x-4">
                <div className="relative">
                  <button
                    onClick={() => setShowMenu(!showMenu)}
                    className="flex items-center space-x-2 focus:outline-none"
                  >
                    <img
                      src={user?.avatar || 'https://ui-avatars.com/api/?name=User&background=1D4ED8&color=fff'}
                      alt={user?.name}
                      className="w-10 h-10 rounded-full border-2 border-primary"
                    />
                    <span className="hidden md:block text-gray-700 font-medium">
                      {user?.name}
                    </span>
                    <svg
                      className="w-4 h-4 text-gray-700"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </button>

                  {showMenu && (
                    <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg py-2 z-50">
                      <Link
                        to="/profile"
                        className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                        onClick={() => setShowMenu(false)}
                      >
                        Profile
                      </Link>
                      <Link
                        to="/tickets"
                        className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                        onClick={() => setShowMenu(false)}
                      >
                        My Tickets
                      </Link>
                      <button
                        onClick={handleLogout}
                        className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-100"
                      >
                        Logout
                      </button>
                    </div>
                  )}
                </div>
              </div>
            ) : (
              <div className="flex items-center space-x-4">
                <button
                  onClick={() => navigate('/login')}
                  className="text-gray-700 hover:text-primary transition-colors font-medium"
                >
                  Login
                </button>
                <button
                  onClick={() => navigate('/signup')}
                  className="px-4 py-2 rounded-xl shadow bg-primary text-white hover:bg-blue-700 transition-colors font-medium"
                >
                  Sign Up
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

