import { useUser } from '../context/UserContext';
import TicketCard from '../components/TicketCard';
import { Link } from 'react-router-dom';

const Tickets = () => {
  const { tickets, isAuthenticated } = useUser();

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Please Login</h2>
          <p className="text-gray-600 mb-6">You need to be logged in to view your tickets.</p>
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

  return (
    <div className="min-h-screen py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-2">My Tickets</h1>
          <p className="text-gray-600">View and manage your purchased tickets</p>
        </div>

        {tickets.length === 0 ? (
          <div className="bg-white rounded-xl shadow-md p-12 text-center">
            <svg
              className="w-24 h-24 mx-auto text-gray-400 mb-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 5v2m0 4v2m0 4v2M5 5a2 2 0 00-2 2v3a2 2 0 110 4v3a2 2 0 002 2h14a2 2 0 002-2v-3a2 2 0 110-4V7a2 2 0 00-2-2H5z"
              />
            </svg>
            <h3 className="text-2xl font-bold text-gray-900 mb-2">No Tickets Yet</h3>
            <p className="text-gray-600 mb-6">Start exploring events and purchase your first ticket!</p>
            <Link
              to="/events"
              className="inline-block px-6 py-3 rounded-xl bg-primary text-white hover:bg-blue-700 transition-colors font-medium"
            >
              Browse Events
            </Link>
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {tickets.map((ticket) => (
              <TicketCard key={ticket.id} ticket={ticket} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Tickets;

