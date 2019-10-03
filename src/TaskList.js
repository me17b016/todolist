import React from 'react';
import {TaskCard} from './TaskCard';
export const TaskList = props => {
    return  <div>
            {props.task.map((task) => (<TaskCard key= {task.id} task = {task}/>))}
        </div>;
};
// {props.task.map((task) => (<TaskCard key= {task.id} task = {task}/>))}