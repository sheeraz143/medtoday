import React, { Component } from 'react';

class ClassProps extends Component {
    render() {
        return (
            <div>
                <h1>Welcome {this.props.name} {this.props.age} </h1>
            </div>
        );
    }
}

export default ClassProps;