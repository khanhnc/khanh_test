import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import {useSelector} from 'react-redux';


const PrivateRoute = ({ component: Component }) => {
    const isLoggedIn = useSelector(state => state.isLoggedIn);
    return (
        <Route render={props => (
            isLoggedIn ?
                <Component {...props} />
                : <Redirect to="/login" />
        )} />
    );
};

export default PrivateRoute;