import './TaskItem.css'
import { FiCheck, FiTrash2, FiEdit } from 'react-icons/fi';

function TaskItem({task}) {
  console.log('task: ', task)

  const toggleTaskComplete= ()=>{

  }
  const handleEdit= ()=>{

  }
  const removeTask= ()=>{

  }
  /**
   * {
    "create": "2024-09-14T16:46:23.683Z",
    "name": "jvvjv",
    "category": "Trabajo",
    "limitDate": "2024-09-10",
    "complete": "No"
}
   */
  return (
    <>
      <div className='task-info'>
        <small>Creado:{task.create}</small>
        <small>{task.name}</small>
        <small>Completado: {task.complete}</small>
        <small>Fecha Limite: {task.limitDate}</small>
        <small>Categoría: {task.category}</small>
      </div>
      <div className='icons'>
        <button className='check-btn' onClick={()=>toggleTaskComplete()}>
          <FiCheck size={18}/>
        </button>
        <button className='edit-btn' onClick={()=>handleEdit()}>
          <FiEdit size={18}/>
        </button>
        <button className='delete-btn' onClick={()=>removeTask()}>
          <FiTrash2 size={18}/>

        </button>
      </div>
    </>
  );
}

export default TaskItem;
