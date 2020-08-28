import React from 'react';
import './App.css';
import TimerInput from "./TimerInput";
import Timer from "./Timer";
import StartButton from "./StartButton";

function App() {
    return (
        <div className="App">
            <header className="App-header">
                <h1>
                    My Mobbing timer
                </h1>
                <TimerInput/>
                <Timer/>
                <StartButton/>
            </header>
        </div>
    );
}

export default App;
