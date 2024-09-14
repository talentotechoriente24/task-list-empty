/* eslint-disable react/prop-types */
import TaskItem from './TaskItem';
import './TaskList.css'
function TaskList({tasks}) {

  return (
    <ul className='task-list'>
      {tasks.map((task,index)=>(
        <TaskItem
          key={index}
          task={task}
        />
      ))

      }
    </ul>
  );
}

export default TaskList;
