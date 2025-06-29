import { Link } from 'react-router-dom'
import Card from '../components/Card'
import Button from '../components/Button'

const Home = () => {
  const features = [
    {
      title: 'Task Management',
      description: 'Create, manage, and track your tasks with ease. Mark tasks as complete and filter by status.',
      icon: '📝',
      link: '/tasks'
    },
    {
      title: 'API Integration',
      description: 'Browse posts from JSONPlaceholder API with search functionality and responsive design.',
      icon: '🌐',
      link: '/posts'
    },
    {
      title: 'Dark Mode',
      description: 'Toggle between light and dark themes for comfortable viewing at any time.',
      icon: '🌙',
      link: '#'
    }
  ]

  return (
    <div className="space-y-8">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-gray-900 dark:text-gray-100 mb-4">
          Welcome to TaskManager
        </h1>
        <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
          A modern React application built with Tailwind CSS, featuring task management, 
          API integration, and responsive design.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {features.map((feature, index) => (
          <Card
            key={index}
            className="text-center hover:shadow-xl transition-shadow duration-300"
          >
            <div className="text-4xl mb-4">{feature.icon}</div>
            <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-gray-100">
              {feature.title}
            </h3>
            <p className="text-gray-600 dark:text-gray-400 mb-6">
              {feature.description}
            </p>
            {feature.link !== '#' ? (
              <Link to={feature.link}>
                <Button variant="primary" className="w-full">
                  Try It Out
                </Button>
              </Link>
            ) : (
              <Button variant="secondary" className="w-full">
                Available
              </Button>
            )}
          </Card>
        ))}
      </div>

      <Card className="bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-4">
            Built with Modern Technologies
          </h2>
          <div className="flex flex-wrap justify-center gap-4 mb-6">
            <span className="px-3 py-1 bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-300 rounded-full text-sm">
              Vite
            </span>
            <span className="px-3 py-1 bg-purple-100 dark:bg-purple-900/30 text-purple-800 dark:text-purple-300 rounded-full text-sm">
              Tailwind CSS
            </span>
            <span className="px-3 py-1 bg-orange-100 dark:bg-orange-900/30 text-orange-800 dark:text-orange-300 rounded-full text-sm">
              React Router
            </span>
          </div>
          <p className="text-gray-600 dark:text-gray-400">
            This application demonstrates modern React development practices including 
            hooks, context API, custom hooks, and responsive design patterns.
          </p>
        </div>
      </Card>
    </div>
  )
}

export default Home;
// This code defines a Home component that serves as the landing page for a React application.
// It includes a welcome message, a grid of features with icons and descriptions, and a section