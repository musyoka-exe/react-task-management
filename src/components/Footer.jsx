 const Footer = () => {
  const currentYear = new Date().getFullYear()
  
  const footerLinks = [
    { label: 'About', href: '#' },
    { label: 'Privacy', href: '#' },
    { label: 'Terms', href: '#' },
    { label: 'Contact', href: '#' }
  ]

  return (
    <footer className="bg-white dark:bg-gray-800 border-t border-gray-200 dark:border-gray-700 mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center mb-4 md:mb-0">
            <span className="text-lg font-bold text-blue-600 dark:text-blue-400">
              TaskManager
            </span>
          </div>
          
          <div className="flex space-x-6 mb-4 md:mb-0">
            {footerLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
        
        <div className="border-t border-gray-200 dark:border-gray-700 pt-4 mt-4">
          <p className="text-center text-gray-500 dark:text-gray-400 text-sm">
            © {currentYear} TaskManager. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
