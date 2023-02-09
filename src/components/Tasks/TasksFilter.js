import React from 'react';
import './TasksFilter.css';

const TasksFilter = (props) => {
    const filterChangeHandler=(event)=>{
        props.onChangeFilter(event.target.value)
    }

    return (
        <div className='expenses-filter'>
            <div className='expenses-filter__control'>
                <label>Filter by priority</label>
                <select value={props.selected} onChange={filterChangeHandler}>
                    <option value='all'>All</option>
                    <option value='low'>Low</option>
                    <option value='medium'>Medium</option>
                    <option value='high'>High</option>
                </select>
            </div>
        </div>
    );
};

export default TasksFilter;