/* eslint-disable react/prop-types */
import { useState } from 'react';
import './TaskItem.css'
import { FiCheck, FiTrash2, FiEdit, FiX } from 'react-icons/fi';

function TaskItem({task, index, toggleTaskCompletion, removeTask, editTask}) {
  const [isEditting, setIsEditting] = useState(false);
  const [newText, setNewText] = useState(task.name);
  const [newCategory, setNewCategory] = useState(task.category);
  const [newDueDate, setNewDueDate] = useState(task.limitDate);
  const handleEdit = ()=>{
    if(isEditting){
      editTask(index, newText, newCategory, newDueDate)
    }
    setIsEditting(!isEditting);
  }

  const handleCancelEdit = () => {
    setIsEditting(false);
    setNewText(task.text);
    setNewCategory(task.category);
    setNewDueDate(task.dueDate);
  }

  return (
    <>
      <div className={`task-item ${task.completed ? 'completed': ''}`}>
        {
          isEditting ? (
            <div className='edit-form'>
               <input 
                  type="text"
                  placeholder='Editar tarea'
                  value={newText}
                  onChange={(e)=>setNewText(e.target.value)}
                />
                <select value={newCategory} onChange={(e)=>setNewCategory(e.target.value)}>
                  <option value="">Categoría</option>
                  <option value="Trabajo">Trabajo</option>
                  <option value="Personal">Personal</option>
                  <option value="Hogar">Hogar</option>
                </select>
                <input 
                  type="date"
                  value={newDueDate}
                  onChange={(e)=>setNewDueDate(e.target.value)}
                />
                <div className='eedit-buttons'>
                  <button className='edit-save-btn' onClick={handleEdit}> <FiCheck size={18}/></button>
                  <button className='edit-cancel-btn' onClick={handleCancelEdit}> <FiX size={18}/></button>
                </div>
            </div>
          ) : (
            <>
              <span onClick= {() => toggleTaskCompletion(index)}> {task.text}</span>
              <div className='task-info'>
                <small>Creado: {new Date(task.create).toLocaleDateString()} {new Date(task.create).toLocaleTimeString()}</small>
                <small>{task.name}</small>
                <small>Completado: {task.complete}</small>
                <small>Fecha Limite: {task.limitDate}</small>
                <small>Categoría: {task.category}</small>
              </div>
            </>
          )

        }
        
        
        <div className='icons'>
          <button className='check-btn' onClick={()=> toggleTaskCompletion(index)}>
            <FiCheck size={18}/>
          </button>
          <button className='edit-btn' onClick={()=>handleEdit()}>
            <FiEdit size={18}/>
          </button>
          <button className='delete-btn' onClick={()=>removeTask(index)}>
            <FiTrash2 size={18}/>

          </button>
        </div>
      </div>
    </>
  );
}

export default TaskItem;
