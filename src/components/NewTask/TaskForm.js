import React, {useState} from "react";
import './TaskForm.css'

const options = [
    { value: 'low', label: 'Low' },
    { value: 'medium', label: 'Medium' },
    { value: 'high', label: 'High' }
]

const TaskForm=(props)=>{
    const [enteredTitle,setEnteredTitle]=useState ('')
    const [enteredAmount,setEnteredAmount]=useState ('low')
    const [enteredDate,setEnteredDate]=useState ('')

    const titleChangeHandler=(event)=>{
        setEnteredTitle(event.target.value)

    }
    const amountChangeHandler=(event)=>{
        setEnteredAmount(event.target.value)

    }
    const dateChangeHandler=(event)=>{
        setEnteredDate(event.target.value)
    }
    const submitHandler=(event)=>{
        event.preventDefault()
        const taskData={
            title:enteredTitle,
            amount:enteredAmount,
            date:new Date(enteredDate)
        }
        props.onSaveTaskData(taskData)
        setEnteredTitle('')
        setEnteredAmount('low')
        setEnteredDate('')
    }
    return(
        <form onSubmit={submitHandler}>
            <div className='new-expense__controls'>
                <div className='new-expense__control'>
                    <label>Task</label>
                    <input type="text" onChange={titleChangeHandler} value={enteredTitle}/>
                </div>
                <div className='new-expense__control'>
                    <label>Priority</label>
                    <select name='amount' className='ne-t' onChange={amountChangeHandler} value={enteredAmount}>
                        <option value='low'>Low</option>
                        <option value='medium'>Medium</option>
                        <option value='high'>High</option>
                    </select>
                </div>
                <div className='new-expense__control'>
                    <label>Date</label>
                    <input type="date" onChange={dateChangeHandler} min="2023-01-18" max='2025-12-31' value={enteredDate}/>
                </div>
            </div>
            <div className='new-expense__actions'>
                <button type='submit'>Add Task</button>
            </div>
        </form>
    )
}
export default TaskForm