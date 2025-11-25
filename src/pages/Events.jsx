import { useState } from 'react';
import { useEvents } from '../context/EventContext';
import EventCard from '../components/EventCard';
import Loader from '../components/Loader';

const Events = () => {
  const {
    loading,
    searchQuery,
    setSearchQuery,
    selectedCategory,
    setSelectedCategory,
    sortBy,
    setSortBy,
    getFilteredEvents,
    categories
  } = useEvents();

  const [localSearch, setLocalSearch] = useState(searchQuery);

  const handleSearch = (e) => {
    e.preventDefault();
    setSearchQuery(localSearch);
  };

  const filteredEvents = getFilteredEvents();

  if (loading) {
    return <Loader />;
  }

  return (
    <div className="min-h-screen py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">All Events</h1>
          
          {/* Search and Filters */}
          <div className="bg-white rounded-xl shadow-md p-6 mb-6">
            <form onSubmit={handleSearch} className="mb-6">
              <div className="flex flex-col sm:flex-row gap-4">
                <input
                  type="text"
                  placeholder="Search events, locations..."
                  value={localSearch}
                  onChange={(e) => setLocalSearch(e.target.value)}
                  className="flex-1 px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary"
                />
                <button
                  type="submit"
                  className="px-6 py-3 rounded-lg bg-primary text-white hover:bg-blue-700 transition-colors font-medium"
                >
                  Search
                </button>
              </div>
            </form>

            {/* Filters */}
            <div className="flex flex-wrap gap-4 items-center">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Category
                </label>
                <select
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                  className="px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary"
                >
                  {categories.map((category) => (
                    <option key={category} value={category}>
                      {category}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Sort By
                </label>
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary"
                >
                  <option value="date">Date</option>
                  <option value="price">Price</option>
                  <option value="title">Title</option>
                </select>
              </div>
            </div>
          </div>
        </div>

        {/* Events Grid */}
        {filteredEvents.length === 0 ? (
          <div className="text-center py-12 bg-white rounded-xl shadow-md">
            <p className="text-gray-600 text-lg">No events found. Try adjusting your filters.</p>
          </div>
        ) : (
          <>
            <p className="text-gray-600 mb-6">
              Showing {filteredEvents.length} event{filteredEvents.length !== 1 ? 's' : ''}
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredEvents.map((event) => (
                <EventCard key={event.id} event={event} />
              ))}
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Events;

