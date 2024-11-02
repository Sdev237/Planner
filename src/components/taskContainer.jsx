import React, { useState } from 'react'; 
import { Header } from './header/header';
import { TaskInput } from './taskInput/taskInput';
import { TaskList } from './taskList/taskList';
import { Footer } from './footer/footer';

export const TaskContainer = () => {
  const [taskList, setTaskList] = useState([]); 

  const addTask = (title) => {
    const newTask = {
      id: taskList.length  ? taskList[taskList.length - 1].id + 1 : 1,
      title: title,
      completed: false,
    };
    setTaskList([...taskList, newTask]); 
  };

  const editTask = (id, completedValue) => {
    setTaskList(
      taskList.map((task) =>
        task.id === id ? { ...task, completed: completedValue } : task
      )
    ); 
  };

  const deleteTask = (id) => {
    setTaskList(taskList.filter((task) => task.id !== id)); 
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