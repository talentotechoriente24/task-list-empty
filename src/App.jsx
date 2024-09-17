import './index.css';
import Header from './components/Header'
import TaskForm from './components/TaskForm'
import TaskList from './components/TaskList';
import TaskSearch from './components/TaskSearch';
import TaskFilters from './components/TaskFilters';
import { useState } from 'react';


function App() {
  const [tasks, setNewTasks] = useState([]);

  const editTask = (index, newText, newCategory, newDueDate) => {
    const newTasks = tasks.map((task, idx) => {
      if (idx === index) {
        return { ...task, text: newText, category: newCategory, newDueDate: newDueDate }
      }
      return task
    });
    setNewTasks(newTasks);
  }

  const addTask = (task) => {
    setNewTasks([...tasks, task])
  }

  const toggleTaskCompletion = (index) => {
    const newTasks = tasks.map((task, idx) => {
      if (idx === index) {
        return { ...task, completed: !task.completed, completedAt: task.completed ? null : new Date()  }
      }
      return task
    });
    setNewTasks(newTasks);
  }

  const removeTask = (index) => {
    const newTask = tasks.filter((_, idx) => idx !== index);
    setNewTasks(newTask)
  }


  return (
    <div className='app-container'>
      <Header/>
      <TaskSearch/>
      <TaskFilters/>
      <TaskForm addTask={addTask}/>
      <TaskList 
        tasks={tasks}
        toggleTaskCompletion={toggleTaskCompletion}
        removeTask={removeTask}
        editTask={editTask}

      />
    </div>
  );
}

export default App;
