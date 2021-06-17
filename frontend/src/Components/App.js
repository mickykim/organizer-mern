import './App.css';
import TaskList from './Task/TaskList';
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const App = () => {
    const [tasks, setTasks] = useState(null);
    const [currentTask, setCurrentTask] = useState(null);
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
    }, [currentTask]);
    return (
        <div className="container">
            <TaskList tasks={tasks} />
        </div>
    );
};

export default App;
