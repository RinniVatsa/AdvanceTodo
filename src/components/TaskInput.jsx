import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTask } from '../redux/slices/taskSlice';

const TaskInput = () => {
    const [task, setTask] = useState('');
    const [priority, setPriority] = useState('Medium');
    const dispatch = useDispatch();

    const handleAddTask = () => {
        if (task.trim()) {
            const newTask = {
                id: Date.now(), // Unique ID for each task
                text: task,
                priority,
            };
            dispatch(addTask(newTask));
            setTask(''); // Clear input field
        }
    };

    return ( <
        div className = "task-input" >
        <
        input type = "text"
        value = { task }
        onChange = {
            (e) => setTask(e.target.value)
        }
        placeholder = "Enter task" /
        >
        <
        select value = { priority }
        onChange = {
            (e) => setPriority(e.target.value)
        } >
        <
        option value = "High" > High < /option> <
        option value = "Medium" > Medium < /option> <
        option value = "Low" > Low < /option> < /
        select > <
        button onClick = { handleAddTask } > Add Task < /button> < /
        div >
    );
};

export default TaskInput;