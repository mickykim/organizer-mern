import './App.css';
import TaskList from './Task/TaskList.js';
import TaskForm from './Task/TaskForm.js';
import AddButton from './AddButton';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { MuiPickersUtilsProvider } from '@material-ui/pickers';
import DateFnsUtils from '@date-io/date-fns';
const App = () => {
    const [tasks, setTasks] = useState();
    const [currentTask, setCurrentTask] = useState();
    const [showForm, setShowForm] = useState(false);
    const toggleForm = () => {
        setShowForm(!showForm);
    };
    async function fetchData() {
        const url = 'http://localhost:4000/tasks';
        try {
            const response = await axios.get(url, { crossdomain: true });
            setTasks(response.data);
        } catch (error) {
            console.log(error);
        }
        return null;
    }
    // Similar to componentDidMount and componentDidUpdate
    useEffect(() => {
        fetchData();
    }, []);
    return (
        <MuiPickersUtilsProvider utils={DateFnsUtils}>
            <div className="container">
                <TaskList tasks={tasks} />
                <TaskForm showForm={showForm} />
                <AddButton toggleForm={toggleForm} />
            </div>
        </MuiPickersUtilsProvider>
    );
};

export default App;
