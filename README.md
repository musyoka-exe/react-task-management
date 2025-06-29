# React Task Manager

A modern, responsive React application built with Vite, Tailwind CSS, and React Router. This application demonstrates component architecture, state management, hooks usage, and API integration.

## 🚀 Features

- **Task Management**: Create, manage, and track tasks with local storage persistence
- **API Integration**: Browse posts from JSONPlaceholder API with search and pagination
- **Responsive Design**: Mobile-first design that works on all devices
- **Dark Mode**: Toggle between light and dark themes
- **Modern UI**: Clean, modern interface built with Tailwind CSS
- **Component Architecture**: Reusable components with proper prop handling

## 🛠️ Technologies Used

- **React 18** - Modern React with hooks
- **Vite** - Fast build tool and development server
- **Tailwind CSS** - Utility-first CSS framework
- **React Router** - Client-side routing
- **Local Storage** - Data persistence for tasks

## 📦 Installation

1. Clone the repository:
```bash
git clone <your-repository-url>
cd react-task-manager
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

## 🏗️ Project Structure

```
src/
├── components/          # Reusable UI components
│   ├── Button.jsx      # Button component with variants
│   ├── Card.jsx        # Card component for content layout
│   ├── Footer.jsx      # Footer component
│   ├── Layout.jsx      # Main layout wrapper
│   ├── Navbar.jsx      # Navigation component
│   └── TaskManager.jsx # Task management component
├── contexts/           # React contexts
│   └── ThemeContext.jsx # Theme management context
├── hooks/              # Custom hooks
│   └── useLocalStorage.js # Local storage hook
├── pages/              # Page components
│   ├── Home.jsx        # Home page
│   ├── Posts.jsx       # Posts page with API integration
│   └── Tasks.jsx       # Tasks page
├── App.jsx             # Main app component
├── main.jsx            # App entry point
└── index.css           # Global styles
```

## 🎯 Components Overview

### Core Components

- **Button**: Customizable button with multiple variants (primary, secondary, danger)
- **Card**: Container component for content with optional hover effects
- **Navbar**: Responsive navigation with active link highlighting
- **Footer**: Site footer with links and copyright
- **Layout**: Main layout wrapper that includes navbar and footer

### Features

- **TaskManager**: Complete task management system with:
  - Add/delete tasks
  - Mark tasks as complete
  - Filter tasks (All, Active, Completed)
  - Local storage persistence
  - Task statistics

- **API Integration**: Posts page featuring:
  - Fetch data from JSONPlaceholder API
  - Search functionality
  - Pagination
  - Loading and error states
  - Responsive grid layout

## 🎨 Styling

The application uses Tailwind CSS for styling with:
- Custom animations and transitions
- Dark mode support
- Responsive design patterns
- Custom component classes
- Gradient backgrounds
- Hover effects and micro-interactions

## 🔧 Custom Hooks

- **useLocalStorage**: Persistent state management with localStorage
- **useTheme**: Theme management with context API

## 📱 Responsive Design

The application is fully responsive with:
- Mobile-first approach
- Flexible grid layouts
- Responsive navigation
- Touch-friendly interactions
- Optimized for all screen sizes

## 🌙 Dark Mode

Toggle between light and dark themes with:
- System preference detection
- Persistent theme selection
- Smooth transitions
- Tailwind dark mode classes

## 🚀 Deployment

Build the application for production:

```bash
npm run build
```

The built files will be in the `dist/` directory, ready for deployment to any static hosting service.

### Deployment Options

- **Vercel**: Connect your GitHub repository for automatic deployments
- **Netlify**: Drag and drop the `dist` folder or connect via Git
- **GitHub Pages**: Use GitHub Actions for automated deployment

## 📸 Screenshots

### Home Page
![Home Page](screenshots/home.png)

### Task Management
![Task Management](screenshots/tasks.png)

### Posts with API Integration
![Posts](screenshots/posts.png)

### Dark Mode
![Dark Mode](screenshots/dark-mode.png)

## 🧪 Testing

Run the development server and test:
- Task creation, completion, and deletion
- Theme switching
- API data fetching and search
- Responsive design on different screen sizes
- Navigation between pages

## 📄 License

This project is licensed under the MIT License.

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

## 📞 Support

If you have any questions or issues, please open an issue on GitHub.

---

Built with ❤️ using React, Vite, and Tailwind CSS