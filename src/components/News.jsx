import React from 'react';
import '../App.scss';

class News extends React.Component {

    render() {
        return (
            <div>
                <h3>News</h3>
                <hr></hr>

                <div className="news-box" >

                    <div className="row">
                        <div className="col-8">
                            <h5>Lorem ipsum dolor sit amet</h5>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
                            ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                            ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
                            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt
                            mollit anim id est laborum.
                    </div>
                        <div className="col-4 new-img">
                            <img src="https://picsum.photos/seed/mountain/200/150" className="img-fluid" alt="..." />

                        </div>
                    </div>
                </div>

                <div className="news-box" >
                    <div className="row">
                        <div className="col-8">
                            <h5>Lorem ipsum dolor sit amet</h5>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
                            ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                            ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
                            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt
                            mollit anim id est laborum.
                    </div>
                        <div className="col-4 new-img">
                            <img src="https://picsum.photos/seed/picsum/200/150" className="img-fluid" alt="..." />
                        </div>
                    </div>
                </div>

                <div className="news-box" >
                    <div className="row">
                        <div className="col-8">
                            <h5>Lorem ipsum dolor sit amet</h5>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
                            ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                            ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
                            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt
                            mollit anim id est laborum.
                    </div>
                        <div className="col-4 new-img">
                            <img src="https://picsum.photos/seed/sun/200/150" className="img-fluid" alt="..." />
                        </div>
                    </div>
                </div>

                <div className="news-box" >
                    <div className="row">
                        <div className="col-8">
                            <h5>Lorem ipsum dolor sit amet</h5>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
                            ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                            ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
                            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt
                            mollit anim id est laborum.
                    </div>
                        <div className="col-4 new-img">
                            <img src="https://picsum.photos/seed/animal/200/150" className="img-fluid" alt="..." />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default News;
