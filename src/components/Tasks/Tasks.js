import './Tasks.css'
import Card from "../UI/Card";
import {useState} from "react";
import TasksFilter from "./TasksFilter";
import "../../App";
import TasksList from "./TasksList";

const Tasks=(props)=>{
    const [filteredPr,setFilteredPr]=useState('all')
    const filterChangeHandler=(priority)=>{
        setFilteredPr(priority)
    }

    const filteredTasks=props.tasks.filter((priority)=>{if(filteredPr !=='all')
        return priority.priority===filteredPr
    else return priority})

    return(
        <Card className='expenses'>
            <TasksFilter selected={filteredPr} onChangeFilter={filterChangeHandler}></TasksFilter>
            <TasksList filteredTasks={filteredTasks}></TasksList>
        </Card>
    )
}

export default Tasks