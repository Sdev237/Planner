import React from 'react';
import { TaskItem } from '../taskItem/taskItem';
import styles from './TaskList.module.css';

export const TaskList = ({taskList, editTask, deleteTask, incompletedTasks}) => {
  
  const taskL = taskList.map(task => ( 
    <TaskItem key={task.id} task={task} editTask={editTask} deleteTask={deleteTask} />
  ));
  

  if(taskList && taskList.length > 0)
    {
      return (
        <div className='box'>
          <h2 className={styles.title}>
            {incompletedTasks > 0 &&(
              <>Il te reste encore <span className='important'>{incompletedTasks}</span> tache a acomplir !</>
            )}
            {incompletedTasks === 0 &&(
              <>Géniale, tu as accompli toutes tes tâche </>
            )}
          </h2>
            {taskL && taskL.length > 0 && (  
              <ul className={styles.container}>
                {taskL}
              </ul>
    
            )}
        </div>
      );
    }else{
      return(
        <div className="box">
          <h2 className={styles.emptyState}>
            Salut, Profitez de votre temps libre, il n'y a aucune tâche à accomplir pour le moment !
          </h2>
        </div>
      );
    }
};
