import React, { useEffect, useState } from 'react'; 
import { Header } from './header/header';
import { TaskInput } from './taskInput/taskInput';
import { TaskList } from './taskList/taskList';
import { Footer } from './footer/footer';

export const TaskContainer = () => {

  const [taskList, setTaskList] = useState([]); 
    
  useEffect(() =>{
    const storedTasks = localStorage.getItem("tasksList")

    if (storedTasks) {
      setTaskList(JSON.parse(storedTasks));
    }
    
  }, [])

  const saveTasksToLocalStorage = (tasks) =>{
    localStorage.setItem("tasksList", JSON.stringify(tasks))
  }

  const addTask = (title) => {
    const newTask = {
      id: taskList.length  ? taskList[taskList.length - 1].id + 1 : 1,
      title: title,
      completed: false,
    };
    const updatedTasks = [...taskList, newTask];
    setTaskList(updatedTasks); 
    saveTasksToLocalStorage(updatedTasks);
  };

  const editTask = (id, completedValue) => {
    const updatedTasks = taskList.map((task) =>
      task.id === id ? { ...task, completed: completedValue } : task
    )
    setTaskList(updatedTasks); 
    saveTasksToLocalStorage(updatedTasks);
  };

  const deleteTask = (id) => {
    const updatedTasks = taskList.filter((task) => task.id !== id);
    setTaskList(updatedTasks); 
    saveTasksToLocalStorage(updatedTasks);
  };

  const getTaskCounts = () => {
    const completedTasks = taskList.filter((task) => task.completed).length;
    const incompletedTasks = taskList.length - completedTasks; 
  
    return {
      completedTasks,
      incompletedTasks
    };
  };

  const { completedTasks, incompletedTasks } = getTaskCounts(); 

 
  console.log(incompletedTasks);
  
  return (
    <main>
      <Header />
      <TaskInput addTask={addTask} />
      <TaskList taskList={taskList} incompletedTasks={incompletedTasks} editTask={editTask} deleteTask={deleteTask} />
      <Footer completedTasks={completedTasks} />
    </main>
  );
};