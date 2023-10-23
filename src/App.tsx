import React, {useState} from 'react';
import './App.css';
import {TodoList} from "./components/todolist/TodoList";

function App() {
    const title1 = 'What to learn'
    const title2 = 'What to buy'

    const tasks1 = [
        {id: 1, title: "HTML&CSS", isDone: true},
        {id: 2, title: "JS", isDone: true},
        {id: 3, title: "ReactJS", isDone: false}
    ]
    const tasks2 = [
        {id: 1, title: "Hello world", isDone: true},
        {id: 2, title: "I am Happy", isDone: false},
        {id: 3, title: "Yo", isDone: false}
    ]

    const [tasks, setTasks] = useState(tasks1)

    const filteredTasks = (taskId: number) => {
        let newTasks = tasks.filter(t => t.id !== taskId)
        setTasks(newTasks)
    }

    return (
        <div className="App">
            <TodoList title={title1} tasks={tasks} filteredTasks={filteredTasks}/>
            {/*<TodoList title={title2} tasks={tasks2}/>*/}
        </div>
    );
}

export default App;

