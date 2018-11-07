
import React, { Component } from 'react'
import Sidebar from '../Sidebar';
import MainBtn from '../MainBtn';

class Speed extends Component { //class based

    state = {
        isRunning: false,
        offsetTime: 0,
        stopClass: 'button stop-btn',
        message: '',
        messageClass: 'message'
    }

    handleStart = () => {
        if (!this.state.isRunning) {
            this.setState({
                offsetTime: Date.now(),
                stopClass: 'button stop-btn show',
                message: '',
                messageClass: 'message',
                isRunning: true
            })
        }
        console.log("offsetTime is ", this.state.offsetTime);
    }

    delta = () => {
        let now = Date.now();
        let elapsedTime = now - this.state.offsetTime

        this.setState({
            offsetTime: now,  //new start point?
        })
        return elapsedTime  //passing value from timePassed
    }

    compare = () => {
        let delta = this.delta(); //calling delta func with passed value 
        console.log("timePassed is ", delta);

        let messageNew = '';
        let limit = 5000;
        //let overflow;

        if (delta >= limit) {
            messageNew = 'Success!' //need better output
            // overflow = delta - limit + ' ms above 5 seconds.'
        }
        else
            messageNew = 'Fail!';

        this.setState({
            message: messageNew,
            messageClass: 'message show',
        })
    }

    handleStop = () => {
        if (this.state.isRunning) {
            this.compare();   //calling compare func

            this.setState({
                stopClass: 'button stop-btn',
                isRunning: false
            })
        }
        console.log("offsetTime is ", this.state.offsetTime);
    }

    render() {

        return (
            <div className="row justify-content-between">
                <div className="col-12 col-md-6">
                    <div className="timing-section">
                        <header>
                            <h1 className="">Speed game</h1>
                            <p>This game tests the user reaction time. This is also useful to show-case test automation render waits. </p>
                            <p> The game starts with the user hitting "Start Game" button. Another button "End Game" will appear after x seconds,
                            where x is random time between 1 and 10 seconds. </p>
                            <p> The smaller the number of milliseconds, the better.</p>
                        </header>

                        <div className="btn-and-message higher">
                            <div>
                                <MainBtn classProp="button start-btn" titleProp="Start game" clickProp={this.handleStart} />

                                <MainBtn classProp={this.state.stopClass} titleProp="End game" clickProp={this.handleStop} />
                            </div>

                            <div className={this.state.messageClass}>
                                <h4>{this.state.message}</h4>
                                <p>{this.state.messageOverflow}</p>
                            </div>

                        </div>

                    </div>

                </div>

                <div className="col-12 col-md-5">
                    <Sidebar heading="Hello Speed" text="Why learn: Wait? Sometimes there is a necessity to wait a certain time to make sure the application catches up. In test automation, being reactive is not always the best medcine, and sometimes it pays off to be patient." />

                </div>

            </div>
        )
    }
}

export default Speed

