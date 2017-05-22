
import React, {Component} from 'react';
import Spinner from './Spinner.js';


class Loading extends Component {

    render() {
        return (
            <div className="Step Loading">
                <Spinner/>
            </div>
        );
    }
}

export default Loading;
