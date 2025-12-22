# WARP.md

This file provides guidance to WARP (warp.dev) when working with code in this repository.

## Architecture Overview

This is a React-based portfolio website built with modern web technologies. The application showcases multiple projects and provides information about the developer.

### Tech Stack
- **Frontend Framework**: React 19+ with JSX
- **Build Tool**: Vite 7+
- **Styling**: Tailwind CSS 4+ with Typography plugin
- **Routing**: React Router DOM 7+
- **SEO**: React Helmet for dynamic head management
- **Icons**: React Icons library

### Project Structure
```
src/
├── components/          # Reusable UI components
│   ├── layout/         # Layout components (Header, Footer, Navbar, Layout)
│   └── Card.jsx        # Project card component
├── pages/              # Route-based page components
│   ├── Home.jsx        # Main landing page with projects
│   ├── About.jsx       # About page
│   └── Contact.jsx     # Contact page
├── projects/           # Project-related components
│   └── Projects.jsx    # Projects data and grid display
├── assets/             # Static assets (images)
└── App.jsx            # Main app with React Router setup
```

### Key Architecture Patterns
- **Component-based architecture**: Each UI element is a reusable React component
- **Layout pattern**: Consistent layout wrapper with Header/Footer around page content
- **Data-driven projects**: Projects are defined as data objects in `Projects.jsx` and rendered via map
- **Route-based pages**: Uses React Router for client-side navigation between pages
- **CSS-in-JS styling**: Background images defined as inline styles, with Tailwind for utility classes

### Project Data Structure
Projects in `src/projects/Projects.jsx` follow this schema:
```javascript
{
  title: string,
  isOnline: boolean,
  isPublicRepo: boolean, 
  description: string,
  features: string[],
  repoUrl: string,
  deployedUrl: string,
  imgSrc: string
}
```

## Development Commands

### Core Development
```bash
# Start development server
npm run dev

# Build for production  
npm run build

# Preview production build
npm run preview

# Install dependencies
npm install
```

### File Structure Commands
```bash
# View project structure
find src -name "*.jsx" -o -name "*.js"

# List all components
find src/components -name "*.jsx"

# List all pages
find src/pages -name "*.jsx"
```

## Development Notes

- The app uses React Router v7 with the older Routes/Route pattern (TODO comment in App.jsx suggests upgrading to createBrowserRouter)
- Vite is configured with autoprefixer and Tailwind CSS PostCSS plugins
- Background image is applied via inline styles in the Layout component using a fixed attachment
- No testing framework, linting, or formatting tools are currently configured
- Images are stored in `src/assets/images/` and imported as modules
- The project uses ES modules (type: "module" in package.json)