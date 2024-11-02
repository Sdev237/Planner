import React, { useState } from 'react'; 
import { Header } from './header/header';
import { TaskInput } from './taskInput/taskInput';
import { TaskList } from './taskList/taskList';
import { Footer } from './footer/footer';

export const TaskContainer = () => {
  const [taskList, setTaskList] = useState([]); // Initialisation de taskList comme un tableau vide

  const addTask = (title) => {
    const newTask = {
      id: taskList.length + 1,
      title: title,
      completed: false,
    };
    setTaskList([...taskList, newTask]); // Ajout de la nouvelle tâche à taskList
  };

  const editTask = (id, completedValue) => {
    setTaskList(
      taskList.map((task) =>
        task.id === id ? { ...task, completed: completedValue } : task
      )
    ); // Modification de l'état de complétion d'une tâche
  };

  const deleteTask = (id) => {
    setTaskList(taskList.filter((task) => task.id !== id)); // Suppression de la tâche par son id
  };

  const getTaskCounts = () => {
    const completedTasks = taskList.filter((task) => task.completed).length; // Compte des tâches complètes
    const incompletedTasks = taskList.length - completedTasks; // Compte des tâches incomplètes
  
    return {
      completedTasks,
      incompletedTasks
    };
  };

  const { completedTasks, incompletedTasks } = getTaskCounts(); // Récupération des comptes de tâches

 
  console.log(incompletedTasks);
  
  return (
    <main>
      <Header />
      <TaskInput addTask={addTask} />
      <TaskList taskList={taskList} incompletedTasks={incompletedTasks} editTask={editTask} deleteTask={deleteTask} />
      <Footer />
    </main>
  );
};