import React from 'react';

type TodoListPropsType = {
    title : string
    tasks: Array<TaskType>
    removeTask: (id: number) => void
}

export type TaskType = {
    id: number
    title: string
    isDone: boolean
}

const TodoList = (props: TodoListPropsType) => {
    const tasksItems = props.tasks.map((el: TaskType) => {
            return (
                <li key={el.id}>
                    <input type='checkbox' checked={el.isDone}/>
                    <span>{el.title}</span>
                    <button onClick={()=>props.removeTask(el.id)}>x</button>
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
                <button>All</button>
                <button>Active</button>
                <button>Completed</button>
            </div>
        </div>
    )
};

export default TodoList;