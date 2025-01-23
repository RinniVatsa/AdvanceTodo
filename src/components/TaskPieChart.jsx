import React from 'react';
import { Pie } from 'react-chartjs-2';
import { useSelector } from 'react-redux';

const TaskPieChart = () => {
    const tasks = useSelector((state) => state.tasks.tasks);

    const completedTasks = tasks.filter((task) => task.finished).length;
    const pendingTasks = tasks.length - completedTasks;

    const data = {
        labels: ['Completed', 'Pending'],
        datasets: [{
            data: [completedTasks, pendingTasks],
            backgroundColor: ['#4caf50', '#f44336'], // Green for completed, red for pending
            hoverBackgroundColor: ['#66bb6a', '#e57373'],
        }, ],
    };

    const options = {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
            legend: {
                position: 'bottom',
            },
        },
    };

    return ( <
        div style = {
            { width: '100%', height: '300px' } } >
        <
        h2 > Task Status < /h2> <
        Pie data = { data }
        options = { options }
        /> <
        /div>
    );
};

export default TaskPieChart;