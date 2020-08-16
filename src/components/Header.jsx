import React from 'react';
import '../App.scss';
import NavigationContent from './Navigation-content.jsx';

class Header extends React.Component {

    render() {
        return (
            <div className="header navbar navbar-expand-sm navbar-dark bg-dark">
                <div className="container">
                    <NavigationContent />
                </div>
            </div>
        );
    }
}

export default Header;
