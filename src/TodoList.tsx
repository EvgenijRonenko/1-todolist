import React, {useState} from 'react';
import {filterType} from './App';

type TodoListPropsType = {
    title: string
    tasks: Array<TaskType>
    removeTask: (id: number) => void
    //taskFilter: (filterValue: filterType) => void
}

export type TaskType = {
    id: number
    title: string
    isDone: boolean
}

const TodoList = (props: TodoListPropsType) => {
    let [filteredTasks, setFilteredTasks] = useState<filterType>('All')
    const taskFilter = (filterValue: filterType) => {
        setFilteredTasks(filterValue)
    }

    let durshlag = props.tasks;
    if (filteredTasks === 'Active') {
        durshlag = props.tasks.filter((el) => el.isDone === false)
    }
    if (filteredTasks === 'Completed') {
        durshlag = props.tasks.filter((el) => el.isDone === true)
    }
    const tasksItems = durshlag.map((el: TaskType) => {

        return (
            <li key={el.id}>
                <input type="checkbox" checked={el.isDone}/>
                <span>{el.title}</span>
                <button onClick={() => props.removeTask(el.id)}>x</button>
            </li>
        )
    })

    return (
        <div>
            <h3>{props.title}</h3>
            <div>
                <input/>
                <button>+</button>
            </div>
            <ul>
                {tasksItems}
            </ul>
            <div>
                <button onClick={() => {
                    taskFilter('All')
                }}>All
                </button>
                <button onClick={() => {
                    taskFilter('Active')
                }}>Active
                </button>
                <button onClick={() => {
                   taskFilter('Completed')
                }}>Completed
                </button>
            </div>
        </div>
    )
};

export default TodoList;