import { TaskItem } from '../taskItem/taskItem';
import styles from './TaskList.module.css';

export const TaskList = ({taskList, editTask, deleteTask, incompletedTasks}) => {
  
  const taskList = taskList.map(task) =>{
    <TaskItem key={task.id} />
  }
  return (
  <div className='box'>
    <h2 className={styles.title}>
      Il te reste encore {incompletedTasks} tache a acomplir !
    </h2>
      {taskList && taskList.length > 0 && (  
        <ul className={styles.container}>
          {taskList}
        </ul>

      )}
  </div>
);
};
