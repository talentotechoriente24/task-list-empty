import './index.css';
import Header from './components/Header'
import TaskForm from './components/TaskForm'
import TaskList from './components/TaskList';


function App() {
  const tasks=[
    {create: '13/09/2024', name:'Clase de Programación intermedio', complete:'Si', limitDate:'19/09/2024', category:'Trabajo'},
    {create: '17/09/2024', name:'Clase de Simulación', complete:'NO', limitDate:'15/09/2024', category:'Trabajo'},
    {create: '17/09/2024', name:'Clase de Simulación', complete:'NO', limitDate:'15/09/2024', category:'Trabajo'}
  ]

  return (
    <>
      <Header/>
      <TaskForm/>
      <TaskList tasks={tasks}/>
    </>
  );
}

export default App;
