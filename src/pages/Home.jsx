import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useEvents } from '../context/EventContext';
import EventCard from '../components/EventCard';
import Loader from '../components/Loader';

const Home = () => {
  const { events, loading, searchQuery, setSearchQuery, selectedCategory, setSelectedCategory, categories } = useEvents();
  const [localSearch, setLocalSearch] = useState('');

  const handleSearch = (e) => {
    e.preventDefault();
    setSearchQuery(localSearch);
  };

  const featuredEvents = events.slice(0, 3);
  const filteredEvents = events.filter(event => {
    const matchesSearch = !searchQuery || 
      event.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      event.location.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === 'All' || event.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  if (loading) {
    return <Loader />;
  }

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary to-secondary text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl font-bold mb-6">
              Discover Amazing Events
            </h1>
            <p className="text-xl mb-8 text-gray-100">
              Find and book tickets for concerts, sports, conferences, and more
            </p>

            {/* Search Bar */}
            <form onSubmit={handleSearch} className="max-w-2xl mx-auto">
              <div className="flex flex-col sm:flex-row gap-4">
                <input
                  type="text"
                  placeholder="Search events, locations..."
                  value={localSearch}
                  onChange={(e) => setLocalSearch(e.target.value)}
                  className="flex-1 px-6 py-4 rounded-xl text-gray-900 focus:outline-none focus:ring-2 focus:ring-white"
                />
                <button
                  type="submit"
                  className="px-8 py-4 rounded-xl bg-white text-primary font-semibold hover:bg-gray-100 transition-colors"
                >
                  Search
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-8 bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap gap-3 justify-center">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-2 rounded-full font-medium transition-colors ${
                  selectedCategory === category
                    ? 'bg-primary text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Events */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-3xl font-bold text-gray-900">Featured Events</h2>
            <Link
              to="/events"
              className="text-primary hover:text-blue-700 font-semibold"
            >
              View All →
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredEvents.map((event) => (
              <EventCard key={event.id} event={event} />
            ))}
          </div>
        </div>
      </section>

      {/* All Events (if filtered) */}
      {(searchQuery || selectedCategory !== 'All') && (
        <section className="py-12 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">
              {searchQuery ? `Search Results for "${searchQuery}"` : `${selectedCategory} Events`}
            </h2>

            {filteredEvents.length === 0 ? (
              <div className="text-center py-12">
                <p className="text-gray-600 text-lg">No events found. Try a different search.</p>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredEvents.map((event) => (
                  <EventCard key={event.id} event={event} />
                ))}
              </div>
            )}
          </div>
        </section>
      )}
    </div>
  );
};

export default Home;

