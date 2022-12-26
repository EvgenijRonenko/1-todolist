import React, {ChangeEvent, useState, KeyboardEvent} from 'react';
import {FilterValuesType} from './App';


type TodoListPropsType = {
    title: string
    tasks: Array<TaskType>
    removeTask: (taskId: string) => void
    addTask: (title: string) => void
    changeFilter: (filter: FilterValuesType) => void
}

export type TaskType = {
    id: string
    title: string
    isDone: boolean
}

const TodoList = (props: TodoListPropsType) => {
    let [title, setTitle] = useState('')
    const tasksItems = props.tasks.length
        ? props.tasks.map((task: TaskType) => {
            return (<li key={task.id}>
                <input type="checkbox" checked={task.isDone}/>
                <span>{task.title}</span>
                <button onClick={() => props.removeTask(task.id)}>x</button>
            </li>)
        })
        : <span>Tasks list is empty</span>

    const onClickAddTaskToTodoListHandler = () => {
        props.addTask(title)
        setTitle('')
    }
    const onKeyDownAddTaskToTodoListHandler = (e: KeyboardEvent<HTMLInputElement>) => {
        e.key === 'Enter' && onClickAddTaskToTodoListHandler()
    }

    const onChangeSetLocalTitleHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setTitle(e.currentTarget.value)
    }

    const getOnClickSetFilterHandler = (filter: FilterValuesType) => {
        return () => props.changeFilter(filter)
    }

    return (
        <div>
            <h3>{props.title}</h3>
            <div>
                <input
                    value={title}
                    onChange={onChangeSetLocalTitleHandler}
                    onKeyDown={onKeyDownAddTaskToTodoListHandler}
                />
                <button onClick={onClickAddTaskToTodoListHandler}>+</button>
            </div>
            <ul>
                {tasksItems}
            </ul>
            <div>
                <button onClick={getOnClickSetFilterHandler('all')}>All</button>
                <button onClick={getOnClickSetFilterHandler('active')}>Active</button>
                <button onClick={getOnClickSetFilterHandler('completed')}>Completed</button>
            </div>
        </div>
    );
};

export default TodoList;