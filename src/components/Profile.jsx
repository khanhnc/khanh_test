import React from 'react';
import '../App.scss';
import { useSelector } from 'react-redux';

const Profile = () => {
    const currentUser = useSelector(state => state.currentUser);
    
    return (
        <div>
            <h3>Profile</h3>
            <hr></hr>
            <form>
                <div className="form-group">
                    <label>Username</label>
                    <input className="form-control" value={currentUser.username}  readOnly/>
                </div>
                <div className="form-group">
                    <label >First Name</label>
                    <input className="form-control" value={currentUser.firstName} readOnly/>
                </div>
                <div className="form-group">
                    <label >Last Name</label>
                    <input className="form-control" value={currentUser.lastName} readOnly/>
                </div>
                <div className="form-group">
                    <label >Age</label>
                    <input type="number" className="form-control" value={currentUser.age} readOnly/>
                </div>
                <div className="form-group">
                    <label >Email address</label>
                    <input type="email" className="form-control" value={currentUser.email} readOnly/>
                </div>
            </form>
        </div>
    );
}

export default Profile;
