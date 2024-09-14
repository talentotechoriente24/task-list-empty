import './TaskForm.css'
import { useState } from 'react';
import { FiPlus } from 'react-icons/fi';
function TaskForm() {
  const [newTask, setNewTask]= useState('')
  const [category, setCategory]= useState('')
  const [date, setDate]= useState('')

  const handleSubmit = ()=>{

  }

  return (
    <form className='task-form' onSubmit={handleSubmit}>
    <input 
    type="text"
    placeholder='Agregar tarea'
    value={newTask}
    onChange={(e)=>setNewTask(e.target.value)}
     />
     <select value={category} onChange={(e)=>setCategory(e.target.value)}>
      <option value="">Categoría</option>
      <option value="Trabajo">Trabajo</option>
      <option value="Personal">Personal</option>
      <option value="Hogar">Hogar</option>
     </select>
     <input 
     type="date"
     value={date}
     onChange={(e)=>setDate(e.target.value)}
      />
     <button type='submit'>
      <FiPlus size={20}/>
     </button>
    </form>
  );
}

export default TaskForm;
