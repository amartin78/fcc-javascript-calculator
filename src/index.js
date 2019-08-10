import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

class Main extends React.Component {

    render() {
        return (
            <React.Fragment>
                <p>Hello World</p>
            </React.Fragment>
        );
    }
}

ReactDOM.render(<Main />, document.getElementById('root'));


