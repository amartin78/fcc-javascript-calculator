import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Display from './components/Display'
import Pad from './components/Pad'


class Main extends React.Component {

    render() {
        return (
            <div id="calculator">
                <Display />
                <Pad />
            </div>
        );
    }
}

ReactDOM.render(<Main />, document.getElementById('app'));


