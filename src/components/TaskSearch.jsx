import './TaskSearch.css';

function TaskSearch({setSearchQuery}) {
  return (
    <div className="task-search">
      <input
        type='text'
        placeholder='Buscar Tareas ...'
        onChange={(e) =>console.log('Escribistes: ', e.target.value)}
      />
    </div>
  );
}

export default TaskSearch;
