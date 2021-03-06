import React, { Component } from "react";
import "./Form.scss";
import Sidebar from "../Sidebar";
import SubmitBtn from "../SubmitBtn";
import MainBtn from "../MainBtn";
import HeaderText from "../HeaderText";
import Lion from "../../img/lion-small.jpeg";
import Zebra from "../../img/zebra-small.jpeg";
import Lemur from "../../img/lemur.jpg";
import AccountData from "../../data/accounts.json";
import LoginOptions from "./LoginOptions";

class RoleBasedLogin extends Component {
  state = {
    role: "",
    email: "",
    password: "",
    errorText: "",
    loggedInText: "",
    formClass: "form show",
    loggedinClass: "loggedin",
    btnMessage: "",
    roleText: ""
  };

  handleChange = e => {
    this.setState({
      //value= what user types in
      [e.target.name]: e.target.value
    });
  };

  handleLogin = e => {
    e.preventDefault();
    let username = this.state.email;

    //console.log(AccountData[username]);
    //console.log('pass ' + AccountData[username].password);

    if (AccountData[username] && AccountData[username].password === this.state.password) {
      let newRole = AccountData[username].role;

      this.setState({
        role: newRole,
        formClass: "form",
        loggedinClass: "loggedin show",
        loggedInText: this.state.email
      });
    } else {
      this.setState({
        errorText: "Username or Password is incorrect"
      });
    }
  };

  displayPictAndBtns = () => {
    let displayAnimal;
    let displayBtns;

    if (this.state.role === "lion") {
      displayAnimal = <img src={Lion} alt="" />;
      displayBtns = (
        <div className="btns">
          <MainBtn
            classProp="button turquoise-btn"
            clickProp={this.handleClick.bind(this, "one")}
          >
            one
          </MainBtn>
          <MainBtn
            classProp="button green-btn"
            clickProp={this.handleClick.bind(this, "two")}
          >
            two
          </MainBtn>
          <MainBtn
            classProp="button pink-btn"
            clickProp={this.handleClick.bind(this, "three")}
          >
            three
          </MainBtn>
        </div>
      );
    } else if (this.state.role === "zebra") {
      displayAnimal = <img src={Zebra} alt="" />;
      displayBtns = (
        <div className="btns">
          <MainBtn
            classProp="button turquoise-btn"
            clickProp={this.handleClick.bind(this, "one")}
          >
            one
          </MainBtn>
          <MainBtn
            classProp="button green-btn"
            clickProp={this.handleClick.bind(this, "two")}
          >
            two
          </MainBtn>
        </div>
      );
    } else if (this.state.role === "lemur") {
      displayAnimal = <img src={Lemur} alt="" />;
      displayBtns = (
        <div className="btns">
          <MainBtn
            classProp="button turquoise-btn"
            clickProp={this.handleClick.bind(this, "one")}
          >
            one
          </MainBtn>
        </div>
      );
    }
    return { animal: displayAnimal, btns: displayBtns }; //returning object
  };

  handleLogout = () => {
    this.setState({
      //clear form
      email: "",
      password: "",
      errorText: "",
      formClass: "form show",
      loggedinClass: "loggedin",
      btnMessage: ""
    });
  };

  handleClick = number => {
    let btnMessageNew;
    if (number === "one") {
      btnMessageNew = "I can do this...";
    } else if (number === "two") {
      btnMessageNew = "I can do this too...";
    } else if (number === "three") {
      btnMessageNew = "I can also do this...";
    }
    this.setState({
      btnMessage: btnMessageNew
    });
  };

  render() {
    // returned object of values from displayPictAndBtns-func put in variable
    let displayThings = this.displayPictAndBtns();

    return (
      <div className="row justify-content-between">
        <div className="col-12 col-md-6">
          <div className="login-section">
            <header>
              <HeaderText componentName={this.constructor.name} />
            </header>

            {/* loginView  */}
            <div className={this.state.formClass}>
              <LoginOptions />

              <form className="form-validation" action="">
                <input
                  name="email"
                  type="email"
                  placeholder="Email"
                  value={this.state.email}
                  onChange={e => this.handleChange(e)}
                />

                <input
                  name="password"
                  type="password"
                  placeholder="Password"
                  value={this.state.password}
                  onChange={e => this.handleChange(e)}
                />
                <span className="warn">
                  {this.state.errorText}
                </span>

                <SubmitBtn clickProp={this.handleLogin}>Log in</SubmitBtn>

                {this.constructor.name === "RandomLogin" &&
                  <MainBtn
                    classProp="button orange-btn random-login"
                    clickProp={this.randomLogin}
                  >
                    Random login
                  </MainBtn>}
              </form>
            </div>

            {/* logoutView */}
            <div className={this.state.loggedinClass}>
              <div className="loginBar">
                <div>
                  <p>Logged in as:</p>
                  <div className="user">
                    {/* returned value from displayPictAndBtns-func */}
                    {displayThings.animal}

                    <h5>
                      {this.state.loggedInText} {this.state.roleText}
                    </h5>
                  </div>
                </div>

                <MainBtn classProp="button red-btn" clickProp={this.handleLogout}>
                  Log out
                </MainBtn>
              </div>
              <div className="permissions">
                <p>
                  Since I am the <strong>{this.state.role}</strong>, I have access to
                  these buttons:
                </p>

                {/* returned value from displayPictAndBtns-func */}
                {displayThings.btns}
              </div>
              {this.state.btnMessage}
            </div>
          </div>
        </div>

        <div className="col-12 col-md-5">
          <Sidebar componentName={this.constructor.name} />
        </div>
      </div>
    );
  }
}
export default RoleBasedLogin;
