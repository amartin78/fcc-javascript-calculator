import React from 'react'

export default class Display extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            amount: 0,
        }
    }

    render() {
        return (
            <React.Fragment>
                <input id="display" type="input" size="10" value={this.state.amount}></input>
            </React.Fragment>
        );
    }
}