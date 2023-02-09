import React, {useState} from "react";
import './App.css';

import Tasks from "./components/Tasks/Tasks";
import NewTask from "./components/NewTask/NewTask";

const tasksD=[
    {
        id: 'e1',
        date: new Date(2023,0,10),
        title:'study c++',
        priority:'low'
    },
    {
        id:'e2',
        date: new Date(2024,0,5),
        title:'study js',
        priority:'high'
    }
]

const App = ()=> {

    const [tasks,setTasks]=useState(tasksD)
    const addTaskhandler=(task)=>{
        setTasks((previousTasks)=>{
            return [task,...previousTasks]
        })
    }
  return (
    <div className="App">
        <NewTask onAddTask={addTaskhandler}></NewTask>
        <Tasks tasks={tasks}></Tasks>
    </div>
  );
}

export default App;
