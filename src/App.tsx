import React, {useState} from 'react';
import './App.css';
import TodoList, {TaskType} from './TodoList';

function App() {

    let [tasks,setTask] = useState([
        {id: 1, title: 'HTML & CSS', isDone: true},
        {id: 2, title: 'ES6 & TS', isDone: true},
        {id: 3, title: 'REACT', isDone: false}
    ])

    const removeTask = (id: number) => {
        tasks = tasks.filter((el) => el.id !== id)
        setTask(tasks)
    }

    return (
        <div className="App">
            <TodoList title={'What to learn'}
                      tasks={tasks}
                      removeTask={removeTask}/>

        </div>
    );
}

export default App;