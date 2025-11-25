import { useState } from 'react';
import { useUser } from '../context/UserContext';
import { Link } from 'react-router-dom';

const Profile = () => {
  const { user, isAuthenticated, updateProfile } = useUser();
  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState({
    name: user?.name || '',
    email: user?.email || '',
    phone: user?.phone || ''
  });

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Please Login</h2>
          <p className="text-gray-600 mb-6">You need to be logged in to view your profile.</p>
          <Link
            to="/"
            className="px-6 py-3 rounded-xl bg-primary text-white hover:bg-blue-700 transition-colors"
          >
            Go to Home
          </Link>
        </div>
      </div>
    );
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    updateProfile(formData);
    setIsEditing(false);
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="min-h-screen py-8">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-gray-900 mb-8">My Profile</h1>

        <div className="bg-white rounded-xl shadow-md p-8">
          {/* Profile Header */}
          <div className="flex flex-col md:flex-row items-center md:items-start mb-8 pb-8 border-b">
            <img
              src={user?.avatar || 'https://ui-avatars.com/api/?name=User&background=1D4ED8&color=fff'}
              alt={user?.name}
              className="w-32 h-32 rounded-full border-4 border-primary mb-4 md:mb-0 md:mr-6"
            />
            <div className="text-center md:text-left flex-1">
              <h2 className="text-3xl font-bold text-gray-900 mb-2">{user?.name}</h2>
              <p className="text-gray-600 mb-4">{user?.email}</p>
              <button
                onClick={() => setIsEditing(!isEditing)}
                className="px-6 py-2 rounded-xl border-2 border-primary text-primary hover:bg-primary hover:text-white transition-colors font-medium"
              >
                {isEditing ? 'Cancel' : 'Edit Profile'}
              </button>
            </div>
          </div>

          {/* Profile Form */}
          {isEditing ? (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Full Name
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Phone Number
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary"
                />
              </div>

              <div className="flex space-x-4">
                <button
                  type="submit"
                  className="px-6 py-3 rounded-xl bg-primary text-white hover:bg-blue-700 transition-colors font-medium"
                >
                  Save Changes
                </button>
                <button
                  type="button"
                  onClick={() => {
                    setIsEditing(false);
                    setFormData({
                      name: user?.name || '',
                      email: user?.email || '',
                      phone: user?.phone || ''
                    });
                  }}
                  className="px-6 py-3 rounded-xl border-2 border-gray-300 text-gray-700 hover:bg-gray-50 transition-colors font-medium"
                >
                  Cancel
                </button>
              </div>
            </form>
          ) : (
            <div className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Full Name
                </label>
                <p className="text-gray-900 text-lg">{user?.name}</p>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Email
                </label>
                <p className="text-gray-900 text-lg">{user?.email}</p>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Phone Number
                </label>
                <p className="text-gray-900 text-lg">{user?.phone || 'Not provided'}</p>
              </div>
            </div>
          )}

          {/* Quick Actions */}
          <div className="mt-8 pt-8 border-t">
            <h3 className="text-xl font-bold text-gray-900 mb-4">Quick Actions</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Link
                to="/tickets"
                className="p-4 rounded-lg border-2 border-gray-200 hover:border-primary transition-colors"
              >
                <div className="flex items-center">
                  <svg className="w-8 h-8 text-primary mr-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 5v2m0 4v2m0 4v2M5 5a2 2 0 00-2 2v3a2 2 0 110 4v3a2 2 0 002 2h14a2 2 0 002-2v-3a2 2 0 110-4V7a2 2 0 00-2-2H5z" />
                  </svg>
                  <div>
                    <p className="font-semibold text-gray-900">My Tickets</p>
                    <p className="text-sm text-gray-600">View your purchased tickets</p>
                  </div>
                </div>
              </Link>

              <Link
                to="/events"
                className="p-4 rounded-lg border-2 border-gray-200 hover:border-primary transition-colors"
              >
                <div className="flex items-center">
                  <svg className="w-8 h-8 text-primary mr-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                  <div>
                    <p className="font-semibold text-gray-900">Browse Events</p>
                    <p className="text-sm text-gray-600">Discover new events</p>
                  </div>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;

