import { TaskItem } from '../taskItem/taskItem';
import styles from './TaskList.module.css'
export const TaskList = () => {
  return (
  <div className='box'>
    <h2 className={styles.title}>
      Il te reste encore x tache a acomplir !
    </h2>
    <ul className={styles.container}>Composant TaskItem ici ...
      <TaskItem />
    </ul>
  </div>
);
};
