import React from 'react';
import '../App.scss';
import NavigationContent from './Navigation-content.jsx';

class Footer extends React.Component {

    render() {
        return (
            <div className="footer bg-light" >
                <NavigationContent className="footer-content" />
            </div>
        );
    }
}

export default Footer;
