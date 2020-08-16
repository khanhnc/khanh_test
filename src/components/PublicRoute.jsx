import React from 'react';
import { Route, Redirect } from 'react-router-dom';

import {useSelector} from 'react-redux';

const PublicRoute = ({component: Component}) => {
    const isLoggedIn = useSelector(state => state.isLoggedIn);
    return (
        <Route render={props => (
            isLoggedIn ?
                <Redirect to="/profile" />
            : <Component  {...props} />
        )} />
    );
};

export default PublicRoute;