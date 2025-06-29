 import TaskManager from '../components/TaskManager'

const Tasks = () => {
  return (
    <div>
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-2">
          Task Management
        </h1>
        <p className="text-gray-600 dark:text-gray-400">
          Organize your tasks efficiently with our interactive task manager.
        </p>
      </div>
      <TaskManager />
    </div>
  )
}

export default Tasks
