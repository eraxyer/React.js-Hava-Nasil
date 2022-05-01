import React, { Component } from 'react';

class Kelvin extends Component {
    render() {
        return (
            <div>
                {this.props.kelvinValue} Kelvin °K
            </div>
        );
    }
}

export default Kelvin;