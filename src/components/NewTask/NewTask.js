import React from "react";
import TaskForm from "./TaskForm";
import './NewTask.css'

const NewTask=(props)=>{


    const saveTaskDatahandler=(enteredTaskData)=>{
        const taskData={
            ...enteredTaskData,
            id:Math.random().toString()
        }
        props.onAddTask(taskData)
    }
    return(
        <div className='new-expense'>
            <TaskForm onSaveTaskData={saveTaskDatahandler}></TaskForm>
        </div>
    )
}
export default NewTask