import React, {useEffect, useState} from 'react';
import './App.css';
import TodoList, {TaskType} from "./TodoList";
import {v1} from "uuid";

// Create
// Read (pagination, filtration, sorting)
// Update (edit, modification)
// Delete
// CRUD

// Interface

export type FilterValuesType = "all"|"active"|"completed"

function App() {

   const todoListTitle: string = "What to learn"

   const [tasks, setTasks] = useState<Array<TaskType>>([
        {id: v1(), title: "HTML & CSS", isDone: true},
        {id: v1(), title: "ES6 & TS", isDone: true},
        {id: v1(), title: "REACT", isDone: false},
    ])
    const [filter, setFilter] = useState<FilterValuesType>("all")

    const removeTask = (taskId: string) => {
        setTasks(tasks.filter(t => t.id !== taskId)) // асинхронно, 5-10 ms
    }
    const changeTodoListFilter = (filter: FilterValuesType) => {
        setFilter(filter)
    }
    const addTask = (title: string) => {
        const newTask: TaskType = {
            id: v1(),
            title: title,
            isDone: false
        }
        setTasks([newTask, ...tasks])
    }

    const changeTaskStatus = (taskId: string, isDone: boolean) => {
        setTasks(tasks.map(t => t.id === taskId ? {...t, isDone: isDone}: t))
    }


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

    const filteredTasksForRender: Array<TaskType> = getFilteredTasksForRender()



    return (
        <div className="App">
            <TodoList
                filter={filter}
                title={todoListTitle}
                tasks={filteredTasksForRender}

                addTask={addTask}
                removeTask={removeTask}
                changeTaskStatus={changeTaskStatus}
                changeTodoListFilter={changeTodoListFilter}
            />
        </div>
    );
}

export default App;
