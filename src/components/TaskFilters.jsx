import './TaskFilters.css';

const TaskFilters = () => {
  const handleOnchange = (value) => {
    console.log('Seleccionastes: ', value)
  }
  return (
    <div className="task-filters">
      <select onChange={(e) => handleOnchange(e.target.value)}>
        <option value="">Todas las Categorías</option>
        <option value="Trabajo">Trabajo</option>
        <option value="Personal">Personal</option>
        <option value="Hogar">Hogar</option>
      </select>
      <select onChange={(e) => handleOnchange(e)}>
        <option value="">Todos los estados</option>
        <option value="completed">Completadas</option>
        <option value="pending">Pendientes</option>
      </select>
    </div>
    
  )
}
export default TaskFilters;