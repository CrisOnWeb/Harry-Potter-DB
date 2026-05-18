# Harry Potter DB

A responsive React application to explore characters from the Harry Potter universe using the HP API.

Users can browse characters, filter results by name, house and gender, and access detailed character profiles through dynamic routes.

## Features

- Character search and filtering
- Dynamic character detail pages
- Responsive layout for mobile, tablet and desktop
- Loading, error and empty states
- Custom 404 pages
- API response caching with localStorage
- Accessible semantic structure
- Reusable React components
- SCSS architecture following BEM methodology

## Technologies

- React
- React Router
- JavaScript (ES6+)
- SCSS
- Vite
- [HP API](https://hp-api.onrender.com/)

## Installation

Clone the repository:

`git clone <repository-url>`

Install dependencies:

`npm install`

Start the development server:

`npm run dev`

## Accessibility and UX

The project includes:

- Semantic HTML structure
- Accessible form labels
- aria-live regions for dynamic content
- Accessible loading states
- Descriptive alternative text for meaningful images
- Responsive layouts

## Data Handling

API responses are cached in localStorage to reduce unnecessary requests and improve perceived performance.

Cached data expires automatically after a defined period of time.

## Credits

Character data provided by the [HP API](https://hp-api.onrender.com/).
This project also uses:

- [Heroicons](https://heroicons.com/) © Tailwind Labs, licensed under MIT.

- Harry Potter related names, characters and house emblems are property of Warner Bros. and the Wizarding World franchise.
  Images sourced from [Harry Potter Wiki](https://harrypotter.fandom.com/).
