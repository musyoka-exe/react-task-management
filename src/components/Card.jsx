 const Card = ({ 
  children, 
  title, 
  className = '', 
  hover = true,
  ...props 
}) => {
  const baseClasses = 'bg-white dark:bg-gray-800 rounded-lg shadow-md border border-gray-200 dark:border-gray-700 p-6 transition-all duration-300'
  const hoverClasses = hover ? 'hover:shadow-lg hover:scale-105' : ''
  
  return (
    <div 
      className={`${baseClasses} ${hoverClasses} ${className} animate-fade-in`}
      {...props}
    >
      {title && (
        <h3 className="text-lg font-semibold mb-4 text-gray-900 dark:text-gray-100">
          {title}
        </h3>
      )}
      {children}
    </div>
  )
}

export default Card
