import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { login, logout } from './redux/slices/taskSlice';
import TaskInput from './components/TaskInput';
import TaskList from './components/TaskList';
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
    /div>
);
};

export default App;