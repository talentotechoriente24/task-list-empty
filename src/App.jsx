import './index.css';
import Header from './components/Header'
import TaskForm from './components/TaskForm'
import TaskList from './components/TaskList';
import TaskSearch from './components/TaskSearch';
import TaskFilters from './components/TaskFilters';
import { useState } from 'react';


function App() {
  const [tasks, setNewTasks] = useState([]);

  const addTask = (task) => {
    setNewTasks([...tasks, task])
  }

  return (
    <>
      <Header/>
      <TaskSearch/>
      <TaskFilters/>
      <TaskForm addTask={addTask}/>
      <TaskList tasks={tasks}/>
    </>
  );
}

export default App;
