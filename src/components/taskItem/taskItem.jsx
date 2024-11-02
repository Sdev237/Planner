// Ce composant est utilisé pour afficher une tâche.
import { TaskList } from "../taskList/taskList";
import styles from "./TaskItem.module.css";

export const TaskItem = ({editTask, deleteTask, task}) => {
  
  return (
    <li 
      className={`${styles.container} ${
        task?.completed ? styles.success : styles.default
      }`}
      onClick={()=> editTask(task.id, !task.completed)}
    
    >
      <div className={styles.item}>
        <div className={`${styles.id} ${task?.completed ? styles.idSuccess : styles.idDefault }`}>{task.id}</div>
        <div className={task?.completed ? styles.contentSuccess : styles.contentDefault}>
          {task.title}
        </div>      
      </div>
      <button className="button-primary" 
        onClick={(e)=>{
          e.stopPropagation();
          deleteTask(task.id);
        }}>❌</button>
    </li>
  );
};
