import React, {Component} from 'react';
import CodeForm from './Components/CodeForm.js';
import SelectedCode from './Components/SelectedCode.js';
import UI from './Components/UI.js';
import CSSTransitionGroup from 'react-transition-group/CSSTransitionGroup';

import './App.css';
import Codes from './Codes.json';


class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            selectedCode: null,
            invalidCode: false
        };

        this.errorTimeout = null;

        this.handleCodeChange = this.handleCodeChange.bind(this);
        this.handleReset = this.handleReset.bind(this);
    }

    handleCodeChange(code) {
        let selectedCode = null;
        for(let i = 0; i<Codes.length; i++){
            if(Codes[i].code === code){
                selectedCode = Codes[i];
            }
        }

        if(selectedCode){
            this.setState({selectedCode: selectedCode});
        } else {
            this.setState({invalidCode: true});
            this.errorTimeout = setTimeout(this.handleReset, 2000)
        }
    }

    handleReset() {
        this.setState({selectedCode: null});
        this.setState({invalidCode: false});

        if(this.errorTimeout != null){
            clearTimeout(this.errorTimeout);
        }
    }

    render() {

        const invalidCode = this.state.invalidCode;
        const selectedCode = this.state.selectedCode;

        let step = null;
        if(selectedCode){
            step = <SelectedCode code={selectedCode} onReset={this.handleReset}/>
        } else {
            step = <CodeForm onChange={this.handleCodeChange}/>
        }

        return (
            <div className="Wrap">
                <div className="Square">
                    <UI isValid={!invalidCode} />
                    <CSSTransitionGroup
                        transitionName="Step"
                        transitionAppear={true}
                        transitionAppearTimeout={2000}
                        transitionEnterTimeout={2000}
                        transitionLeaveTimeout={2000}>
                        {step}
                    </CSSTransitionGroup>
                </div>
            </div>
        );
    }
}

export default App;
