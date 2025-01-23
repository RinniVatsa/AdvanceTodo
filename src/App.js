import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { login, logout } from './redux/slices/taskSlice';
import TaskInput from './components/TaskInput';
import TaskList from './components/TaskList';
import TaskPieChart from './components/TaskPieChart';
import './App.css';

const App = () => {
        const isAuthenticated = useSelector((state) => state.tasks.isAuthenticated);
        const dispatch = useDispatch();

        return ( <
            div className = "container" >
            <
            h1 > To - Do Application < /h1> {!isAuthenticated ? ( <
            button onClick = {
                () => dispatch(login())
            } > Login < /button>
        ): ( <
            >
            <
            button onClick = {
                () => dispatch(logout())
            } > Logout < /button> <
            TaskInput / >
            <
            TaskList / >
            <
            />
        )
    } <
    header className = "app-header" >
    <
    h1 > Task Manager < /h1> <
    /header>


<
main className = "app-content" >
    <
    div className = "left-section" >
    <
    TaskPieChart / >
    <
    /div> <
div className = "right-section" >
    <
    TaskInput / >
    <
    TaskList / >
    <
    /div> < /
main > < /
div >
);
};

export default App;