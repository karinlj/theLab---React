import React, { Component } from "react";
import Sidebar from "../Sidebar";
import HeaderText from "../HeaderText";
import "./Games.scss";
import GameSidebar from "./GameSidebar";
import VideoSidebar from "../Video/VideoSidebar";
import CatIcon from "../../img/kitten-icon.png";
import Hedgehog from "../../img/hedgehog-icon.png";
import Kitten from "./Kitten";
import Hedgehogs from "./Hedgehogs";

class KittenCollect extends Component {
  state = {
    isRunning: false,
    time: 0,
    interval: 0,
    points: 0,
    kittens: [],
    hedgehogs: [],
    textmessage: "Start playing by clicking the start button!"
  };
  handleStart = () => {
    //start the game, call on tick() in intervals of 100ms

    if (!this.state.isRunning) {
      let interval = setInterval(() => this.tick(), 100);

      this.setState({
        isRunning: true,
        time: 0,
        interval,
        points: 0,
        textmessage: ""
      });
    }
  };

  tick = () => {
    //if Math.random() blir <  0.06 call on drawKitten()
    //if Math.random() blir <  0.02 call on drawHedgehog()
    //increase time with 1
    //define finish time in ms
    //clearInterval() if time===finishTime

    const finishTime = 300;
    if (Math.random() < 0.06) this.drawKitten();
    //if (Math.random() < 0.5) console.log("hej");

    if (Math.random() < 0.02) this.drawHedgehog();

    this.setState({
      time: this.state.time + 1
    });
    if (this.state.time > finishTime) {
      clearInterval(this.state.interval);

      this.setState({
        isRunning: false,
        textmessage: "Game over!"
      });
    }
  };

  randomPos = () => {
    //random x & y coordinates relative to square size
    const height = "400";
    const width = "550";

    let randHeight = Math.floor(Math.random() * (height - 48)) + "px";
    let randWidth = Math.floor(Math.random() * (width - 48)) + "px";
    return [randHeight, randWidth];
  };

  drawKitten = () => {
    //new kitten-object with props: id, img, x & y coordinate
    //fetch randomPos()-values
    //new kitten-array with spread, add kitten-object
    //call on hideKitten(kittenTemp.id) after 1s with setTimeout()

    let randPos = this.randomPos();
    let randHeight = randPos[0];
    let randWidth = randPos[1];
    const catIcon = <img src={CatIcon} alt="cat" />;

    let kittenObj = { id: Math.random(), catIcon, randHeight, randWidth };

    const kittens = [...this.state.kittens, kittenObj];
    this.setState({
      kittens
    });
    setTimeout(() => this.hideKitten(kittenObj.id), 1500);

    console.log("kittenObj", kittenObj);
  };

  hideKitten = id => {
    //pass in id from drawKitten()
    //new kitten-array, with filter:  keep id !== parameter-id
    const kittens = this.state.kittens.filter(k => k.id !== id);
    this.setState({
      kittens
    });
  };

  kittenClick = id => {
    //give points
    //call hideKitten()
    //pass in id from kittens.map()
    this.hideKitten(id);
    this.setState({
      points: this.state.points + 1
    });
  };

  drawHedgehog = () => {
    let randPos = this.randomPos();
    let randHeight = randPos[0];
    let randWidth = randPos[1];

    const hedgehogIcon = <img src={Hedgehog} alt="hedgehog" />;

    let hedgehogObj = { id: Math.random(), hedgehogIcon, randHeight, randWidth };

    let hedgehogs = [...this.state.hedgehogs, hedgehogObj];

    this.setState({
      hedgehogs
    });
    setTimeout(() => this.hideHedgehog(hedgehogObj.id), 1800);
  };

  hideHedgehog = id => {
    const hedgehogs = this.state.hedgehogs.filter(h => h.id !== id);
    this.setState({
      hedgehogs
    });
  };

  hedgehogClick = id => {
    clearInterval(this.state.interval);
    this.setState({
      isRunning: false,
      textmessage: "Game over!"
    });
  };
  render() {
    const { time, points, kittens, hedgehogs, textmessage } = this.state;

    return (
      <div className="row">
        <div className="col-12">
          <div className="game-section">
            <header>
              <HeaderText componentName={this.constructor.name} />
            </header>

            <div className="row">
              <div className="col-12 col-md-10 col-lg-12  col-xl-6">
                <div className="game-square">
                  <Kitten kittens={kittens} onKittenClick={this.kittenClick} />

                  <Hedgehogs
                    hedgehogs={hedgehogs}
                    onHedgehogsClick={this.hedgehogClick}
                  />
                  <div className="textmessage">
                    <span>
                      {textmessage}
                    </span>
                  </div>
                </div>
              </div>

              <div className="col-12 col-md-2 col-lg-12 col-xl-6">
                <GameSidebar time={time} points={points} onBtnClick={this.handleStart} />
              </div>
            </div>

            {/* sidebar */}
            <div className="row">
              <div className="col-12 col-md-6">
                <Sidebar componentName={this.constructor.name} />
              </div>
              <div className="col-12 col-md-6">
                <VideoSidebar
                  src="https://www.youtube.com/embed/1g35EKDY5bo"
                  height="230"
                  width="100%"
                  title="getting-started"
                />
                <VideoSidebar
                  src="https://www.youtube.com/embed/ScLjPwMlxe0"
                  height="230"
                  width="100%"
                  title="getting-started"
                />

              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default KittenCollect;
