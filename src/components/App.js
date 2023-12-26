import React, { useState } from "react";
import './../styles/App.css';

const App = () => {
  const [tasksList, setTasksList] = useState([]);
  const [task, setTask] = useState('');

  const addTask = () => {
    if (task.trim() !== '') {
      setTasksList([...tasksList, task]);
      setTask('');
    }
  };

  const removeTask = (index) => {
    const updatedTasks = tasksList.filter((_, i) => i !== index);
    setTasksList(updatedTasks);
  };

  return (
    <div>
      <header>
        <h1>To-Do List</h1>
        <div>
          <input
            type="text"
            value={task}
            onChange={(e) => setTask(e.target.value)}
            placeholder="Enter a new task"
          />
          <button onClick={addTask}>Add Todo</button>
        </div>
      </header>

      <main>
        <ul>
          {tasksList.map((item, index) => (
            <li key={index}>
              {item}
              <button onClick={() => removeTask(index)}>Delete</button>
            </li>
          ))}
        </ul>
      </main>
    </div>
  );
};

export default App;
