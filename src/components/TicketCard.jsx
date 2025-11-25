const TicketCard = ({ ticket }) => {
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden border-2 border-gray-200">
      <div className="p-6">
        {/* Header */}
        <div className="flex justify-between items-start mb-4">
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-1">{ticket.eventTitle}</h3>
            <p className="text-gray-600">{ticket.location}</p>
          </div>
          <div className="text-right">
            <div className="bg-primary text-white px-3 py-1 rounded-lg text-sm font-semibold">
              {ticket.ticketType}
            </div>
          </div>
        </div>

        {/* Event Details */}
        <div className="grid grid-cols-2 gap-4 mb-6">
          <div>
            <p className="text-sm text-gray-500 mb-1">Event Date</p>
            <p className="font-semibold text-gray-900">{formatDate(ticket.eventDate)}</p>
            <p className="text-sm text-gray-600">{ticket.eventTime}</p>
          </div>
          <div>
            <p className="text-sm text-gray-500 mb-1">Purchase Date</p>
            <p className="font-semibold text-gray-900">{formatDate(ticket.purchaseDate)}</p>
            <p className="text-sm text-gray-600">${ticket.price}</p>
          </div>
        </div>

        {/* QR Code */}
        <div className="bg-gray-50 rounded-lg p-4 mb-4">
          <p className="text-sm text-gray-500 mb-2 text-center">Ticket Number</p>
          <div className="bg-white p-4 rounded-lg border-2 border-dashed border-gray-300">
            <p className="text-center font-mono text-lg font-bold text-gray-900">
              {ticket.qrCode}
            </p>
          </div>
          <p className="text-xs text-gray-500 text-center mt-2">
            Present this code at the venue
          </p>
        </div>

        {/* Actions */}
        <div className="flex space-x-3">
          <button className="flex-1 px-4 py-2 rounded-xl border-2 border-primary text-primary hover:bg-primary hover:text-white transition-colors font-medium">
            Download
          </button>
          <button className="flex-1 px-4 py-2 rounded-xl bg-primary text-white hover:bg-blue-700 transition-colors font-medium">
            Share
          </button>
        </div>
      </div>
    </div>
  );
};

export default TicketCard;

