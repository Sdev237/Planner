import React, { useState } from 'react'; 
import { Header } from './header/header';
import { TaskInput } from './taskInput/taskInput';
import { TaskList } from './taskList/taskList';
import { Footer } from './footer/footer';

// Ce composant est utilisé pour afficher l'intégralité de la fonctionalité de Tache.
export const TaskContainer = () => {

  const [taskList, setTaskList] = useState([]);

  const addTask = (title) =>{
    const newTask = {
      id: taskList.length + 1,
      title: title,
      completed: false,
    };
    setTaskList([...taskList, newTask])
  };

  return (
    <main>
      <Header />
      <TaskInput addTask={addTask}/>
      <TaskList />
      <Footer />
    </main>
  );
};
