import React from 'react';
import styled from "styled-components";
import {Tasks} from "../tasks/Tasks";

type TodoListPropsType = {
    title: string
    // tasks: TaskType[]
    tasks: Array<any>
    filteredTasks: (taskId: number) => void
}

// type TaskType = {
//     id: number
//     title: string
//     isDone: boolean
// }



export const TodoList = (props: TodoListPropsType) => {

    // const tasks = props.tasks.map((el)=>{
    //         return (
    //             <li key={el.id}>
    //                 <input type="checkbox" checked={el.isDone}/>
    //                 <span>{el.title}</span>
    //             </li>
    //         )
    //     })
// const onClickHandler = props.filteredTasks()
    return (
        <div>

            <h3>{props.title}</h3>
            <div>
                <input/>
                <button>+</button>
            </div>
            <ul>
                {/*{tasks}*/}

                <Tasks tasks={props.tasks} filteredTasks={props.filteredTasks}/>
                {/*<li><input type="checkbox" checked={props.tasks[0].isDone}/> <span>{props.tasks[0].title}</span></li>*/}
                {/*<li><input type="checkbox" checked={props.tasks[1].isDone}/> <span>{props.tasks[1].title}</span></li>*/}
                {/*<li><input type="checkbox" checked={props.tasks[2].isDone}/> <span>{props.tasks[2].title}</span></li>*/}
            </ul>
            <AppButtonSection>
                {/*<button onClick={()=>onClickHandler()}>All</button>*/}
                <button>Active</button>
                <button>Completed</button>
            </AppButtonSection>
        </div>
    );
};


const AppButtonSection = styled.div`
  display: flex;
  justify-content: space-between;

  button {
    height: 30px;
  }
`