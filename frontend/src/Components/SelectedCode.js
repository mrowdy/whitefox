import React, {Component} from 'react';
import {mouseTrap} from 'react-mousetrap';

class SelectedCode extends Component {

    constructor(props) {
        super(props);
        this.handleReset = this.handleReset.bind(this);
        this.reset = this.reset.bind(this);

    }

    componentWillMount() {
        this.props.bindShortcut('back', this.reset);
    }

    reset(){
        this.props.onReset();
    }

    handleReset(event){
        event.preventDefault();
        this.reset();
    }

    render() {
        const code = this.props.code.code;

        return (
            <div className="SelectedCodeStep, Step">
                Code {code} was selected
                <button onClick={this.handleReset}>Back</button>
            </div>
        );
    }
}

export default mouseTrap(SelectedCode);
