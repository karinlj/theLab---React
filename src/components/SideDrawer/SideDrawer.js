import React from 'react';
import { NavLink } from 'react-router-dom';
import './SideDrawer.scss';

//functional/stateless component
const SideDrawer = props => {

    let drawerClasses = ['side-drawer']; //sätta klasser
    //if show = true
    if (props.show) {
        drawerClasses = ['side-drawer open'];
    }

    return (
        <div className="container">
            <div className="row">
                <div className="col">

                    <nav className={drawerClasses}>
                        <ul className="links">
                            <li><NavLink to="/">Home</NavLink></li>
                            <li>Forms manipulation and testing
                                <ul className="sub-list">
                                    <li><NavLink to="/form">Form validation</NavLink></li>
                                </ul>
                            </li>

                            <li>Lists
                                <ul className="sub-list">
                                    <li><NavLink to="/todoList">TodoList</NavLink></li>
                                </ul>
                            </li>

                            <li>Blog
                                <ul className="sub-list">
                                    <li><NavLink to="/blog">Blog</NavLink></li>
                                </ul>
                            </li>

                            <li><NavLink to="/about">About</NavLink></li>
                        </ul>
                    </nav>
                </div>
            </div>
        </div >
    );
};
export default SideDrawer   