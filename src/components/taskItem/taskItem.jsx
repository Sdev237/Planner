// Ce composant est utilisé pour afficher une tâche.
import styles from "./TaskItem.module.css";

export const TaskItem = () => {
  return (
    <li className={`${styles.container} ${styles.default}`}>
      <div className={styles.item}>
        <div className={`${styles.id} ${styles.idDefault}`}>1</div>
        <div className={styles.contentDefault}>
          Me preparer pour l'examen du tcf canada
        </div>
        
      </div>
      <button className="button-primary">x</button>
    </li>
  );
};
