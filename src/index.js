import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import Calculator from './components/Calculator'


export default class Main extends React.Component {

    render() {
        return (
            <React.Fragment>
                <Calculator />
            </React.Fragment>
        )
    }
}

ReactDOM.render(<Main />, document.getElementById('app'));


