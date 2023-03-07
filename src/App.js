import React, {useEffect,useState} from "react";
import './App.css';
import Login from "./components/Login/Login";
import AuthContext from "./components/Login/auth-context";

import Home from "./components/Login/Home";
import Tasks from "./components/Tasks/Tasks";
import NewTask from "./components/NewTask/NewTask";
import MainHeader from "./components/Login/MainHeader/MainHeader";

const tasksD=[
    {
        id: 'e1',
        date: new Date(2023,0,10),
        title:'Study JS',
        priority:'medium'
    },
    {
        id:'e2',
        date: new Date(2023,1,5),
        title:'Study React',
        priority:'high'
    }
]

const App = ()=> {

    const [isLoggedIn,setIsLoggedIn]=useState(false)
    const [tasks,setTasks]=useState(tasksD)
    const addTaskhandler=(task)=>{
        setTasks((previousTasks)=>{
            return [task,...previousTasks]
        })
    }
    useEffect(()=>{
        const storedUserLoggedIn=localStorage.getItem('isLoggedIn')
        if (storedUserLoggedIn ==='1'){
            setIsLoggedIn(true)
        }
    },[])

    const loginHandler = (email, password) => {
        localStorage.setItem('isLoggedIn','1')
        setIsLoggedIn(true);
    };

    const logoutHandler = () => {
        localStorage.removeItem('isLoggedIn')
        setIsLoggedIn(false);
    };
  return (
      <AuthContext.Provider value={{isLoggedIn: isLoggedIn,
          onLogout: logoutHandler}}>
          <MainHeader onLogout={logoutHandler}/>
    <main className="App">
        {!isLoggedIn && <Login onLogin={loginHandler} />}
        {isLoggedIn && <Home onLogout={logoutHandler} />}
        {isLoggedIn && <NewTask onAddTask={addTaskhandler}></NewTask>}
        <Tasks tasks={tasks}></Tasks>
    </main>
      </AuthContext.Provider>
  );
}

export default App;
