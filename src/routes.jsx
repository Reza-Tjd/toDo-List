import React, {useState} from 'react';
import NewTask from './Components/NewTask/NewTask.jsx';
import Task from './Components/Task/Task.jsx';
import SignUp from './Components/SignUp/SignUp.jsx';
import SignIn from './Components/SignIn/SignIn.jsx'
import WelcomePage from './Components/WelcomePage/Welcoem.jsx';
import StartPage from './Components/StartPage/StartPage.jsx';

const todoList = []; 

const addTask = (newTask) => {
  todoList.push(newTask);
};

const routes = [
  { path: "/signup", element: <SignUp /> },
  { path: "/signin", element: <SignIn /> },
  { path: "/welcomepage", element: <WelcomePage /> },
  { path: "/newtask", element: <NewTask addTask={addTask} /> },
  { path: "/tasks", element: <Task todoList={todoList} /> },
  { path: "/toDo-List", element: <StartPage /> },
];

export default routes;
