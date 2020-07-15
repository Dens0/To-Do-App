import React from "react";


import Task from "./Task";

    const TaskList = (props) => {
    const active = props.tasks.filter(task => task.active).sort((a,b)=>{
        a=a.text.toLowerCase()
       b=b.text.toLowerCase()
        if(a<b)return -1
        if(a>b)return 11
        return -0
    });
    const done = props.tasks.filter(task => !task.active).sort((a,b)=>{
        if(a.finishDate<b.finishDate)return 1
        if(a.finishDate>b.finishDate)return -1
        return -0
    });
    const activeTasks = active.map(task => <Task key={task.id} task={task} delete={props.delete} done={props.done}/>)
    const doneTasks = done.map(task => <Task key={task.id} task={task} delete={props.delete} done={props.done}/>).sort((a,b)=>a.finishDate - b.finishDate);
    // console.log(active,done)
    return (
        <>
            <div className="active">
                <h2>Tasks to do :<em>({active.length})</em></h2>
                {activeTasks.length > 0 ? activeTasks.sort() : " Brak zadań"}
            </div>
            <hr/>
            <div className="done">
                {done.length > 5 && <span>5 ostatnich zadań</span>}
                <h3>Tasks done : <em>({done.length})</em></h3>
                {doneTasks.slice(0, 5)}
            </div>
        </>
    )

}

export default TaskList
