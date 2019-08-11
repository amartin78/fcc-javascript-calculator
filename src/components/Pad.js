import React from 'react'

function Buttons()  {

    return (
        <div id="pad">
            <button id="clear">C</button>
            <button id="zero">0</button>
            <button id="one">1</button>
            <button id="two">2</button>
            <button id="three">3</button>
            <button id="four">4</button>
            <button id="five">5</button>
            <button id="six">6</button>
            <button id="seven">7</button>
            <button id="eight">8</button>
            <button id="nine">9</button>
            <button id="add">+</button>
            <button id="subtract">-</button>
            <button id="multiply">*</button>
            <button id="divide">/</button>
            <button id="equals">=</button>
            <button id="decimal">.</button>
        </div>
    );

}

export default class Pad extends React.Component {
    constructor(props) {
        super(props);

        
    }

    render() {

        return (
            <React.Fragment>
                <Buttons />
            </React.Fragment>
        );
    }
}