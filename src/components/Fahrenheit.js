import React, { Component } from 'react';

class Fahrenheit extends Component {
    render() {
        return (
            <div>
                {this.props.fahrenheitValue} Fahrenheit °F
            </div>
        );
    }
}

export default Fahrenheit;