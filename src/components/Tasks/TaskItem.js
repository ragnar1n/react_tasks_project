import React from "react";
import './TaskItem.css'
import TaskDate from './TaskDate'
import Card from "../UI/Card";



const TaskItem=(props)=>{

    return (
        <li>
            <Card className='card expense-item'>
                <TaskDate date={props.date}></TaskDate>
                <div className='expense-item__description'>
                    <h2>{props.title}</h2>
                    <div className='expense-item__price'>
                        <h4>{props.priority}</h4>
                    </div>
                </div>
            </Card>
        </li>
    )
}

export default TaskItem