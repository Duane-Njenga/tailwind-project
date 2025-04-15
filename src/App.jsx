import { useState } from 'react';

function App() {
  const [task, setTask] = useState('');
  const [tasks, setTasks] = useState([]);

  // Add task to list, only if it's not empty or blank
  const addTask = () => {
    if (!task) return;  // Avoid adding empty or blank tasks
    setTasks([...tasks, task]);
    setTask('');
  };

  // Delete task from the list by index
  const deleteTask = (index) => {
    setTasks(tasks.filter((_, i) => i !== index));
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-6 rounded shadow w-full max-w-sm">
        <h1 className="text-2xl font-bold mb-4 text-center">To-Do List</h1>
        <div className="flex mb-4">
        <form onSubmit={(e) => { e.preventDefault(); addTask(); }}>
  <input
    type="text"
    value={task}
    onChange={(e) => setTask(e.target.value)}
    placeholder="Enter task"
    className="flex-grow p-2 border rounded-l"
  />
  <button
    type="submit"  
    className="bg-blue-500 text-white px-4 rounded-r"
  >
    Add
  </button>
</form>
        </div>
        <ul>
          {tasks.map((t, index) => (
            <li
              key={index}
              className="flex justify-between items-center bg-gray-200 p-2 rounded mb-2"
            >
              <span>{t}</span>
              <button
                onClick={() => deleteTask(index)}
                className="decoration-black border-4 border-red-500 rounded-md bg-red-500"
              >
                Delete
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;

