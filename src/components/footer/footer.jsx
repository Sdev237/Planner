/* eslint-disable react/no-unescaped-entities */
// Ce composant est utilisé pour afficher le champ de saisie de tâche.
import styles from "./footer.module.css";

export const Footer = () => {
  return (
    <footer>
      <code className={styles.footer}>
         Avec TaskFlow tu as éliminé x tache"s"
      </code>
    </footer>
  );
};
