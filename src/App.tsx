import React, {useEffect, useState} from 'react';
import './App.css';
import TodoList, {TaskType} from "./TodoList";
import {v1} from 'uuid';

export type FilterValuesType = "all" | "active" | "completed"

function App() {
    const todoListTitle: string = "What to learn";

        const [tasks, setTasks] = useState([
        {id: v1(), title: "HTML & CSS", isDone: true},
        {id: v1(), title: "ES6 & TS", isDone: true},
        {id: v1(), title: "REACT", isDone: false},
    ])

    const [filter, setFilter] = useState<FilterValuesType> ("all")


    const removeTask = (taskId: string) => {
        setTasks(tasks.filter(t => t.id !== taskId))
    }

    const changeFilter = (filter: FilterValuesType) => {
        setFilter(filter)
    }

    const addTask = () => {

    }

    useEffect( ()=>{console.log(tasks)},[tasks])

    const getFilteredTasksForRender = () => {
        switch (filter) {
            case "active":
                return tasks.filter(t => !t.isDone)
            case "completed":
                return tasks.filter(t => t.isDone)
            default:
                return tasks
        }
    }

    const filteredTasksForRender: TaskType[] = getFilteredTasksForRender()

    return (
        <div className="App">
                <TodoList title={todoListTitle}
                          tasks={filteredTasksForRender}
                          removeTask={removeTask}
                          changeFilter={changeFilter}
                          addTask={addTask}

                />
        </div>
    );
}

export default App;
