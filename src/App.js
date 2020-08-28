import React from 'react';
import './App.css';
import TimerInput from "./TimerInput";
import Timer from "./Timer";
import StartButton from "./StartButton";

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            seconds: '00',   // responsible for the seconds
            minutes: ''  // responsible for the minutes
        }
    }

    secondsRemaining;
    intervalHandle;

    handleChange = event => {
        this.setState({
            minutes: event.target.value
        })
    };

    tick = () => {
        const min = Math.floor(this.secondsRemaining / 60);
        const sec = this.secondsRemaining - (min * 60);
        this.setState({
            minutes: min,
            seconds: sec
        })
        if (sec < 10) {
            this.setState({
                seconds: "0" + this.state.seconds,
            })
        }
        if (min < 10) {
            this.setState({
                value: "0" + min,
            })
        }
        if (min === 0 && sec === 0) {
            clearInterval(this.intervalHandle);
        }

        this.secondsRemaining--
    };

    startCountDown = () => {
        this.intervalHandle = setInterval(this.tick, 1000);
        let time = this.state.minutes;
        this.secondsRemaining = time * 60;
    };


    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <h1>
                        My Mobbing timer
                    </h1>
                    <TimerInput minutes={this.state.minutes} handleChange={this.handleChange}/>
                    <Timer minutes={this.state.minutes} seconds={this.state.seconds}/>
                    <StartButton startCountDown={this.startCountDown}/>
                </header>
            </div>
        );
    }
}

export default App;
