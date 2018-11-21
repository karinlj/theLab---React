import React, { Component } from 'react'
import Sidebar from '../Sidebar';
import MainBtn from '../MainBtn';
import SubmitBtn from '../SubmitBtn';
import './Strings.scss';
import HeaderText from '../HeaderText';


class ConcatStrings extends Component { //class based
    state = {
        string1: '',
        string2: '',
        concatStr: '',
        inputStr: '',
        message: '',
        messageClass: 'message',
    };

    generateStrings = () => {
        let strings = ['bear', 'elefant', 'bunny', 'horse', 'cow', 'tiger', 'lion', 'mouse', 'bird', 'turtle'];

        let randStr1 = strings[Math.floor(Math.random() * strings.length)];
        let randStr2 = strings[Math.floor(Math.random() * strings.length)];

        let doubleRandStr = randStr1 + randStr2;

        this.setState({
            string1: randStr1,
            string2: randStr2,
            concatStr: doubleRandStr
        })
        //console.log(this.state.concatStr);
    }

    handleChange = (e) => {
        this.setState({
            inputStr: e.target.value
        });
    }

    handleSubmit = (e) => {
        e.preventDefault();
        // console.log(this.state.inputStr);

        let messageNew = '';
        if (this.state.inputStr === this.state.concatStr) {
            messageNew = 'Success!';
        }
        else
            messageNew = 'Fail!';

        this.setState({ //reset inputStr, set value={this.state.inputStr} to empty input
            inputStr: '',
            message: messageNew,
            messageClass: 'message show',
        });
    }

    render() {

        return (
            <div className="row justify-content-between">
                <div className="col-12 col-md-6">
                    <div className="concatStrings-section">
                        <header>
                            <HeaderText componentName="concatStr" />

                        </header>

                        <div className="btn-and-message">
                            {/* properties are DEFINED and different VALUES are set */}

                            <MainBtn classProp="button orange-btn" clickProp={this.generateStrings}>Generate strings</MainBtn>
                            <div className={this.state.messageClass}>
                                <h4>{this.state.message}</h4>
                            </div>
                        </div>

                        <h5 className="strings">
                            <span>{this.state.string1}</span> <br />
                            <span>{this.state.string2}</span>
                        </h5> {/* output the two strings */}


                        <form className="todo-form" onSubmit={this.handleSubmit}>

                            <label htmlFor="">Type the two strings together:</label><br></br>

                            <input type="text" onChange={this.handleChange} value={this.state.inputStr} />
                        </form>

                        <SubmitBtn clickProp={this.handleSubmit}>Submit</SubmitBtn>

                    </div>
                </div>

                <div className="col-12 col-md-5">
                    <Sidebar componentName="concatStr" />

                </div>
            </div>
        )
    }
}
export default ConcatStrings