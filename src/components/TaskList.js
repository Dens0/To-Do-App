import React from "react";


import Task from "./Task";
const TaskList = (props) => {
const active = props.tasks.filter(task=>task.active );
const done = props.tasks.filter(task=>!task.active );
    const activeTasks = active.map(task=><Task key={props.id} task={task} delete={props.delete} done={props.done}/>);
    const doneTasks = done.map(task=><Task key={props.id} task={task} delete={props.delete} done={props.done}/>);
    console.log(active,done)
    return (
        <>
            <div className="active">
                <h2>Tasks to do :<em>({active.length})</em></h2>
                {activeTasks.length > 0 ? activeTasks : " Brak zadań"}
            </div>
            <hr/>
            <div className="done">
                {done.length > 5 && <span>5 ostatnich zadań</span>}
                <h3>Tasks done : <em>({done.length})</em></h3>
                {doneTasks.slice(0,5)}
            </div>
        </>
    )

}

export default TaskList
