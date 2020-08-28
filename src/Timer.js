import React from 'react';

class Timer extends React.Component {
    render() {
        return (
            <div>
                <h2>{this.props.minutes}:{this.props.seconds}</h2>
            </div>
        );
    }
}

export default Timer
