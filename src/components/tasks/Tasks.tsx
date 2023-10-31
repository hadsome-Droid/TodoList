import React from 'react';

type TasksPropsType = {
    tasks: TaskType[]
    filteredTasks: (taskId: number)=> void
}

export type TaskType = {
    id: number
    title: string
    isDone: boolean
}

export const Tasks = (props: TasksPropsType) => {
    const tasks = props.tasks.map((el)=>{
        return (
            <li key={el.id}>
                <input type="checkbox" checked={el.isDone}/>
                <span>{el.title}</span>
                <button onClick={()=>onClickButtonHandler(el.id)}>x</button>
            </li>
        )
    })

    const onClickButtonHandler = (id: number) => {
        props.filteredTasks(id)
    }

    return (
        <>
            {tasks}
        </>

    )
};
