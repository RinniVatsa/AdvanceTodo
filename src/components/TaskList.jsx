import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { deleteTask, toggleFinished } from '../redux/slices/taskSlice';

const TaskList = () => {
    const tasks = useSelector((state) => state.tasks.tasks);
    const dispatch = useDispatch();
    const [selectedTasks, setSelectedTasks] = useState([]);

    const handleCheckboxChange = (taskId) => {
        setSelectedTasks((prevSelected) =>
            prevSelected.includes(taskId) ?
            prevSelected.filter((id) => id !== taskId) : [...prevSelected, taskId]
        );
    };

    const handleDeleteSelected = () => {
        dispatch(deleteTask(selectedTasks));
        setSelectedTasks([]);
    };

    return ( <
        div className = "task-list" > {
            tasks.length === 0 ? ( <
                p > No tasks available.Add a task to get started! < /p>
            ) : ( <
                >
                {
                    tasks.map((task) => ( <
                        div key = { task.id }
                        className = "task-item" >
                        <
                        input type = "checkbox"
                        checked = { selectedTasks.includes(task.id) }
                        onChange = {
                            () => handleCheckboxChange(task.id)
                        }
                        /> <
                        span className = { `task-text ${task.finished ? 'finished' : ''}` } > { task.text } <
                        /span> <
                        span className = { `priority ${task.priority.toLowerCase()}` } > { task.priority } <
                        /span>   <button onClick={() => dispatch(toggleFinished(task.id))}> { task.finished ? '⭐' : '☆' } < /
                        button > <
                        /div>
                    ))
                } {
                    selectedTasks.length > 0 && ( <
                        button className = "delete-selected"
                        onClick = { handleDeleteSelected } >
                        Delete <
                        /button>
                    )
                } <
                />
            )
        } <
        /div>
    );
};

export default TaskList;