import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    tasks: [],
    isAuthenticated: false,
};

const taskSlice = createSlice({
    name: 'tasks',
    initialState,
    reducers: {
        addTask: (state, action) => {
            state.tasks.push(action.payload);
        },
        deleteTask: (state, action) => {
            state.tasks = state.tasks.filter((task) => !action.payload.includes(task.id));
        },
        toggleFinished: (state, action) => {
            const task = state.tasks.find((task) => task.id === action.payload);
            if (task) {
                task.finished = !task.finished;
            }
        },
        login: (state) => {
            state.isAuthenticated = true;
        },
        logout: (state) => {
            state.isAuthenticated = false;
        },
    },
});

export const { addTask, deleteTask, toggleFinished, login, logout } = taskSlice.actions;
export default taskSlice.reducer;