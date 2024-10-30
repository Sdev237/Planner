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

  const editTask = (id, completedValue) =>{ 
    setTaskList(
      taskList.map((task) =>
        task.id === id ? { ...task, completed : completedValue } : task
      )
    );
  }

  const deleteTask = (id) =>{
    setTaskList(taskList.filter((task) => task.id !== id))
  };

  const getTaskCounts = () =>{
    const completedTasks = taskList.filter((task)=>task.completed.length)
    const incompletedTasks = taskList.length - completedTasks;

    return{
      completedTasks,
      incompletedTasks
    }

  }
  const {completedTasks, incompletedTasks} = getTaskCounts;

  console.log(completedTasks, incompletedTasks);
  

  return (
    <main>
      <Header />
      <TaskInput addTask={addTask}/>
      <TaskList />
      <Footer />
    </main>
  );
};
