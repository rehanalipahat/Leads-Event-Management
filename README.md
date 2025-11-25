# Event Management Frontend

A modern, responsive Event Management frontend application built with React, TailwindCSS, and Vite. This application allows users to browse events, view event details, purchase tickets, and manage their profile.

## Features

- 🎫 **Browse Events**: View all available events with filtering and sorting
- 🔍 **Search**: Search events by title or location
- 📅 **Event Details**: View comprehensive event information
- 🎟️ **Ticket Purchase**: Select and purchase tickets for events
- 👤 **User Profile**: Manage personal information and view purchase history
- 🎨 **Modern UI**: Beautiful, responsive design with TailwindCSS
- 🔐 **User Authentication**: Mock authentication system with context API

## Tech Stack

- **React 18** - UI library
- **React Router DOM** - Client-side routing
- **TailwindCSS** - Utility-first CSS framework
- **Vite** - Build tool and dev server
- **Context API** - State management

## Project Structure

```
/event-management-frontend
 ├── public
 ├── src
 │   ├── components
 │   │   ├── Navbar.jsx
 │   │   ├── Footer.jsx
 │   │   ├── EventCard.jsx
 │   │   ├── TicketCard.jsx
 │   │   └── Loader.jsx
 │   ├── pages
 │   │   ├── Home.jsx
 │   │   ├── Events.jsx
 │   │   ├── EventDetails.jsx
 │   │   ├── Tickets.jsx
 │   │   ├── Profile.jsx
 │   │   └── NotFound.jsx
 │   ├── context
 │   │   ├── UserContext.jsx
 │   │   └── EventContext.jsx
 │   ├── utils
 │   │   └── mockData.js
 │   ├── App.jsx
 │   ├── main.jsx
 │   └── index.css
 ├── package.json
 ├── vite.config.js
 ├── tailwind.config.js
 └── README.md
```

## Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Clone the repository or navigate to the project directory:
   ```bash
   cd event-management-frontend
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

4. Open your browser and navigate to `http://localhost:5173`

### Build for Production

```bash
npm run build
```

The production build will be in the `dist` directory.

### Preview Production Build

```bash
npm run preview
```

## Pages

### Home Page (`/`)
- Featured events display
- Search functionality
- Category filters
- Quick access to all events

### Events Page (`/events`)
- Complete list of all events
- Advanced filtering (category, location)
- Sorting options (date, price, title)
- Search functionality

### Event Details Page (`/events/:id`)
- Detailed event information
- Ticket selection and purchase
- Event description and venue details

### Tickets Page (`/tickets`)
- View all purchased tickets
- Ticket details with QR codes
- Download and share options

### Profile Page (`/profile`)
- View and edit user information
- Quick access to tickets and events

## Features in Detail

### State Management
- **UserContext**: Manages user authentication, profile, and purchased tickets
- **EventContext**: Handles event data, filtering, and search functionality

### Mock Data
The application uses mock data stored in `src/utils/mockData.js`. In a production environment, this would be replaced with API calls.

### Styling
- TailwindCSS utility classes for consistent styling
- Custom color scheme matching the design guidelines
- Responsive design for mobile, tablet, and desktop

## Customization

### Theme Colors
Edit `tailwind.config.js` to customize colors:
```javascript
colors: {
  primary: '#1D4ED8',
  secondary: '#9333EA',
  background: '#F9FAFB',
  text: '#111827',
}
```

### Adding Events
Edit `src/utils/mockData.js` to add or modify events.

## Deployment

### Vercel
1. Install Vercel CLI: `npm i -g vercel`
2. Run `vercel` in the project directory
3. Follow the prompts

### Netlify
1. Build the project: `npm run build`
2. Drag and drop the `dist` folder to Netlify
3. Or use Netlify CLI: `netlify deploy --prod`

### GitHub Pages
The app is configured to work with GitHub Pages using HashRouter (URLs will have `#` in them, e.g., `yoursite.github.io/#/events`).

1. Install dependencies (including gh-pages):
   ```bash
   npm install
   ```

2. Build and deploy:
   ```bash
   npm run deploy
   ```

3. In your GitHub repository settings:
   - Go to Settings → Pages
   - Under "Source", select the `gh-pages` branch
   - Save

4. Your site will be available at: `https://yourusername.github.io/repository-name/`

**Note:** The app uses HashRouter for GitHub Pages compatibility. URLs will look like:
- `yoursite.github.io/#/` (Home)
- `yoursite.github.io/#/events` (Events)
- `yoursite.github.io/#/tickets` (Tickets)

If you prefer clean URLs without `#`, consider deploying to Vercel or Netlify instead.

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

This project is open source and available under the MIT License.

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## Support

For support, email support@eventhub.com or create an issue in the repository.

---

Built with ❤️ using React and TailwindCSS

