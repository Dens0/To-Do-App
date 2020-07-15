import React from "react";

const Task = (props) => {
    const style = {
        color:'red'
    }
    const {id, text, date, important, active, finishDate} = props.task
    // const {done, delete} = props
    if (active) {
        return (
            <div>
                <p>
                    <strong style={important ? style : null}>{text}</strong> - do <span>{date}</span>
                    <button onClick={() => props.done(id)}>Zostało zrobione</button>
                    <button onClick={() => props.delete(id)}>X</button>
                </p>

            </div>
        )
    } else {
        const finish = new Date(finishDate).toLocaleString()
        return (
            <div>
                <p>
                    <strong >{text}</strong> - do <span><em>zrobić do {date}</em></span>
                    {/*<button onClick={() => props.done(id)}>Zostało zrobione</button>*/}
                    <button onClick={() => props.delete(id)}>X</button> <br/>
                    potwiwerdzenie wykoniania <span> {finish}</span>

                </p>
            </div>
        )
    }


}

export default Task
