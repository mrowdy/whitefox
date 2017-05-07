import React, {Component} from 'react';
import CodeForm from './Components/CodeForm.js';
import CodeList from './Components/CodeList.js';
import InvalidCode from './Components/InvalidCode.js';
import SelectedCode from './Components/SelectedCode.js';
import CSSTransitionGroup from 'react-transition-group/CSSTransitionGroup' // ES6

import './App.css';
import Codes from './Codes.json';

class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            selectedCode: null,
            invalidCode: false,
            items: ['hello', 'world', 'click', 'me']
        };

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
        }
    }

    handleReset() {
        this.setState({selectedCode: null});
        this.setState({invalidCode: false});
    }

    render() {

        const invalidCode = this.state.invalidCode;
        const selectedCode = this.state.selectedCode;

        let step = null;
        if(invalidCode){
            step = <InvalidCode onReset={this.handleReset}/>;
        } else if(selectedCode){
            step = <SelectedCode code={selectedCode} onReset={this.handleReset}/>
        } else {
            step = <CodeForm onChange={this.handleCodeChange}/>
        }

        return (
            <div className="App">
                <CodeList codes={Codes}/>
                <hr/>
                <CSSTransitionGroup
                    transitionName="Step"
                    transitionAppear={true}
                    transitionAppearTimeout={2000}
                    transitionEnterTimeout={2000}
                    transitionLeaveTimeout={2000}>
                    {step}
                </CSSTransitionGroup>
            </div>
        );
    }
}

export default App;
