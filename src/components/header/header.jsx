import React from "react";
import styles from './header.module.css';
import reactLogo from "../../assets/react.svg";


export const Header = () => {
  return (
    <div className={styles.container}>
      <div className={styles.titleContainer}>
        <img src={reactLogo} alt="logo" width={45} height={45} />
        <div>
          <h1>TaskFlow</h1>
          <div className="color-gray">
            <code>Essayez cette application , vous ne le regretterez pas</code>
          </div>
          <div className="color-gray">
            <code>Éliminez le chaos , suivez le flux</code>
          </div>
        </div>
      </div>
      <code className="color-primary">V.1.0</code> 
    </div>
  );
};
