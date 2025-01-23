import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { login, logout } from '../redux/slices/authSlice';

const Login = () => {
    const dispatch = useDispatch();
    const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);

    return ( <
        div > {
            isAuthenticated ? ( <
                button onClick = {
                    () => dispatch(logout()) } > Logout < /button>
            ) : ( <
                button onClick = {
                    () => dispatch(login()) } > Login < /button>
            )
        } <
        /div>
    );
};

export default Login;