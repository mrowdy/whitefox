import React, {Component} from 'react';

class InvalidCode extends Component {

    constructor(props) {
        super(props);
        this.handleReset = this.handleReset.bind(this);
    }

    handleReset(event){
        event.preventDefault();
        this.props.onReset();
    }

    render() {
        return (
            <div className="InvalidCodeStep, Step">
                Code is Invalid
                <button onClick={this.handleReset}>Back</button>
            </div>
        );
    }
}

export default InvalidCode;
