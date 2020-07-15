import React, {Component} from 'react';
import './App.css';
import AddTask from "./AddTask";
import TaskList from "./TaskList";


class App extends Component {
    state = {
        tasks: [
            {id: 1, text: 'zageać w Wiedźmina 3', date: '2018-02-15', important: true, active: true, finishDate: null},
            {id: 2, text: 'polowanie', date: '2018-02-15', important: false, active: true, finishDate: null},
            {id: 3, text: 'kodowanie', date: '2018-02-15', important: false, active: true, finishDate: null},
            {id: 4, text: 'matura', date: '2018-02-15', important: true, active: true, finishDate: null},
            {id: 5, text: 'egzamin', date: '2018-02-15', important: false, active: true, finishDate: null},
            {id: 6, text: 'mecz piłki nożnej', date: '2018-02-15', important: true, active: true, finishDate: null},
            {id: 7, text: 'wyjazd do Warszawy', date: '2018-02-15', important: false, active: true, finishDate: null},
            {id: 8, text: 'kupic samochód', date: '2018-02-15', important: false, active: true, finishDate: null},
            {
                id: 9,
                text: 'nauka gry na fortepianie',
                date: '2018-02-15',
                important: true,
                active: true,
                finishDate: null
            },
        ]


    }
    deleteTask = (id) => {
        // const tasks = [...this.state.tasks]
        // const index = tasks.findIndex(task => task.id === id)
        // tasks.splice(index, 1)

        let tasks = [...this.state.tasks]
        tasks = tasks.filter(task=>task.id !==id)
        this.setState({
            tasks
        })



    }


    changeTaskStatus = (id) => {
        console.log("Done " + id)
        const tasks = Array.from(this.state.tasks)
        tasks.forEach(task=>{
            if (task.id === id)
            {
                task.active = false
                 task.finishDate = new Date().getTime()
            }
        })
this.setState({
    tasks
})
    }

    render() {


        return (

            <div className="App">
                HELLO WORLD
                <AddTask/>
                <TaskList tasks={this.state.tasks} delete={this.deleteTask} done={this.changeTaskStatus}/>
            </div>
        )
    }
}

export default App;
