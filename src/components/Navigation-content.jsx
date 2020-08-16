import React from 'react';
import '../App.scss'
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux'
import { logout } from '../actions/actions.jsx';

const NavigationContent = (props) => {
  
    const isLoggedIn = useSelector(state => state.isLoggedIn);
    const dispatch = useDispatch();

    return (
        <div >
            <ul className="navbar-nav">
                <li className="nav-item">
                    <Link className="nav-link" to="/">Home</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="/news">News</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="/profile">Profile</Link>
                </li>
                {
                    isLoggedIn ?
                        <li className="nav-item">
                            <Link className="nav-link" to="/#" onClick={() => dispatch(logout())}>Logout</Link>
                        </li> :
                        <li className="nav-item">
                            <Link className="nav-link" to="/login"> Login</Link>
                        </li>
                }
            </ul>
        </div>
    );
}

export default NavigationContent;
