import React, {Component} from 'react';
import CodeForm from './Components/CodeForm.js';
import AccessGranted from './Components/AccessGranted.js';
import AccessDenied from './Components/AccessDenied.js';

import UI from './Components/UI.js';
import CSSTransitionGroup from 'react-transition-group/CSSTransitionGroup';

import './App.css';
import Codes from './Codes.json';


class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            selectedCode: '',
            codeState: 'neutral'
        };

        this.stateTimout = null;

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
            this.setState({codeState: 'valid'});
            this.stateTimout = setTimeout(this.handleReset, 2000);
        } else {
            this.setState({codeState: 'invalid'});
            this.stateTimout = setTimeout(this.handleReset, 2000);
            this.setState({selectedCode: null});
        }
    }

    handleReset() {
        this.setState({codeState: 'neutral'});

        if(this.stateTimout != null){
            clearTimeout(this.stateTimout);
        }
    }

    render() {
        const codeState = this.state.codeState;

        let step = null;
        if(codeState === 'neutral'){
            step = <CodeForm onChange={this.handleCodeChange}/>
        } else if(codeState === 'valid') {
            step = <AccessGranted/>
        } else if(codeState === 'invalid'){
            step = <AccessDenied/>
        }

        return (
            <div className="Wrap">
                <div className="Square">
                    <UI codeState={codeState} />
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
