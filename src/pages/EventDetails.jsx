import { useParams, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { useEvents } from '../context/EventContext';
import { useUser } from '../context/UserContext';
import Loader from '../components/Loader';

const EventDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { getEventById, loading } = useEvents();
  const { isAuthenticated, addTicket } = useUser();
  const [selectedTicketType, setSelectedTicketType] = useState(null);
  const [showModal, setShowModal] = useState(false);

  const event = getEventById(id);

  if (loading) {
    return <Loader />;
  }

  if (!event) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Event Not Found</h2>
          <button
            onClick={() => navigate('/events')}
            className="px-6 py-3 rounded-xl bg-primary text-white hover:bg-blue-700 transition-colors"
          >
            Back to Events
          </button>
        </div>
      </div>
    );
  }

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  const handlePurchase = () => {
    if (!isAuthenticated) {
      alert('Please login to purchase tickets');
      return;
    }

    if (!selectedTicketType) {
      alert('Please select a ticket type');
      return;
    }

    const ticket = {
      id: Date.now(),
      eventId: event.id,
      eventTitle: event.title,
      ticketType: selectedTicketType.type,
      price: selectedTicketType.price,
      purchaseDate: new Date().toISOString().split('T')[0],
      qrCode: `QR-${Math.random().toString(36).substr(2, 9).toUpperCase()}`,
      eventDate: event.date,
      eventTime: event.time,
      location: event.location
    };

    addTicket(ticket);
    setShowModal(true);
  };

  return (
    <div className="min-h-screen">
      {/* Banner */}
      <div className="relative h-96 overflow-hidden">
        <img
          src={event.thumbnail}
          alt={event.title}
          className="w-full h-full object-cover"
          onError={(e) => {
            e.target.src = 'https://via.placeholder.com/1200x400?text=Event+Image';
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
        <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
          <div className="max-w-7xl mx-auto">
            <span className="bg-primary px-4 py-2 rounded-full text-sm font-semibold mb-4 inline-block">
              {event.category}
            </span>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">{event.title}</h1>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2">
            {/* Event Info */}
            <div className="bg-white rounded-xl shadow-md p-6 mb-6">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Event Details</h2>
              <div className="space-y-4">
                <div className="flex items-start">
                  <svg className="w-6 h-6 mr-3 text-primary mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                  <div>
                    <p className="font-semibold text-gray-900">Date & Time</p>
                    <p className="text-gray-600">{formatDate(event.date)}</p>
                    <p className="text-gray-600">{event.time}</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <svg className="w-6 h-6 mr-3 text-primary mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <div>
                    <p className="font-semibold text-gray-900">Location</p>
                    <p className="text-gray-600">{event.venue}</p>
                    <p className="text-gray-600">{event.location}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Description */}
            <div className="bg-white rounded-xl shadow-md p-6">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">About This Event</h2>
              <p className="text-gray-700 leading-relaxed">{event.description}</p>
            </div>
          </div>

          {/* Ticket Purchase Sidebar */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-xl shadow-md p-6 sticky top-24">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Get Tickets</h2>

              <div className="space-y-4 mb-6">
                {event.tickets.map((ticket, index) => (
                  <div
                    key={index}
                    onClick={() => setSelectedTicketType(ticket)}
                    className={`p-4 rounded-lg border-2 cursor-pointer transition-colors ${
                      selectedTicketType?.type === ticket.type
                        ? 'border-primary bg-blue-50'
                        : 'border-gray-200 hover:border-primary'
                    }`}
                  >
                    <div className="flex justify-between items-center mb-2">
                      <span className="font-semibold text-gray-900">{ticket.type}</span>
                      <span className="text-xl font-bold text-primary">${ticket.price}</span>
                    </div>
                    <p className="text-sm text-gray-600">
                      {ticket.available} tickets available
                    </p>
                  </div>
                ))}
              </div>

              <button
                onClick={handlePurchase}
                className="w-full px-4 py-3 rounded-xl shadow bg-primary text-white hover:bg-blue-700 transition-colors font-medium text-lg"
              >
                {selectedTicketType ? `Buy ${selectedTicketType.type} Ticket` : 'Select Ticket Type'}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Success Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-xl shadow-xl max-w-md w-full p-6">
            <div className="text-center mb-6">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Ticket Purchased!</h3>
              <p className="text-gray-600">Your ticket has been added to your account.</p>
            </div>
            <div className="flex space-x-3">
              <button
                onClick={() => {
                  setShowModal(false);
                  navigate('/tickets');
                }}
                className="flex-1 px-4 py-2 rounded-xl bg-primary text-white hover:bg-blue-700 transition-colors font-medium"
              >
                View Tickets
              </button>
              <button
                onClick={() => setShowModal(false)}
                className="flex-1 px-4 py-2 rounded-xl border-2 border-gray-300 text-gray-700 hover:bg-gray-50 transition-colors font-medium"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default EventDetails;

