import React from "react";
import { NavLink } from "react-router-dom";
import "./SideDrawer.scss";

//functional/stateless component
const SideDrawer = props => {
  let drawerClasses = ["side-drawer"]; //base class

  //if show = true
  if (props.show) {
    drawerClasses = ["side-drawer open"]; //extra open class
  }

  return (
    <div className="container">
      <div className="row">
        <div className="col">
          <nav className={drawerClasses}>
            <ul className="links">
              <li>
                Introduction
                <ul className="sub-list">
                  <li>
                    <NavLink to="/form">Why do test automation?</NavLink>
                  </li>
                  <li>
                    <NavLink to="/form">The Boozang approach</NavLink>
                  </li>
                  <li>
                    <NavLink to="/form">The Boozang tool</NavLink>
                  </li>
                </ul>
              </li>
              <li>
                Filling Forms
                <ul className="sub-list">
                  <li>
                    <NavLink to="/form">
                      <div onClick={props.clickLink}>Form validation</div>
                    </NavLink>
                  </li>
                </ul>
              </li>

              <li>
                Handling lists
                <ul className="sub-list">
                  <li>
                    <NavLink to="/todoList">
                      <div onClick={props.clickLink}>Sorted List</div>
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/randomTodoList">
                      <div onClick={props.clickLink}>Unsorted List</div>
                    </NavLink>
                  </li>
                </ul>
              </li>

              <li>
                Conditional logic
                <ul className="sub-list">
                  <li>
                    <NavLink to="/yellowOrRed">
                      <div onClick={props.clickLink}>Yellow or Red</div>
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/catOrDog">
                      <div onClick={props.clickLink}>Cat or Dog</div>
                    </NavLink>
                  </li>
                </ul>
              </li>

              <li>
                Using data
                <ul className="sub-list">
                  <li>
                    <NavLink to="/concatStrings">
                      <div onClick={props.clickLink}>Concat strings</div>
                    </NavLink>
                  </li>
                </ul>
              </li>

              <li>
                Timing
                <ul className="sub-list">
                  <li>
                    <NavLink to="/speed">
                      <div onClick={props.clickLink}>Speed</div>
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/wait">
                      <div onClick={props.clickLink}>Wait</div>
                    </NavLink>
                  </li>
                </ul>
              </li>

              <li>
                DOM changes
                <ul className="sub-list">
                  <li>
                    <NavLink to="/scramble">
                      <div onClick={props.clickLink}>Scramble</div>
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/changingControls">
                      <div onClick={props.clickLink}>Word scramble</div>
                    </NavLink>
                  </li>
                </ul>
              </li>

              <li>
                Users and roles
                <ul className="sub-list">
                  <li>
                    <NavLink to="/randomLogin">
                      <div onClick={props.clickLink}>Random login</div>
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/login">
                      <div onClick={props.clickLink}>Role-based login</div>
                    </NavLink>
                  </li>
                </ul>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </div>
  );
};
export default SideDrawer;
