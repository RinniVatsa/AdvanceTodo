import React from 'react';
import ReactDOM from 'react-dom/client'; // Import the correct method
import { Provider } from 'react-redux';
import { store } from './redux/store';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root')); // Use createRoot
root.render( <
    React.StrictMode >
    <
    Provider store = { store } >
    <
    App / >
    <

    /Provider> < /
    React.StrictMode >
);