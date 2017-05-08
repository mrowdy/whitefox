import React, {Component} from 'react';

const maxLength = 6;

class CodeForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value: ''
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({value: event.target.value});
        if(event.target.value.length >= maxLength){
            this.handleSubmit(event.target.value)
        }
    }

    handleSubmit(value) {
        this.props.onChange(value);
        this.setState({value: ''});
    }

    render() {
        const value = this.state.value;

        return (
            <div className="Step CodeForm">
                <form className="CodeForm_Wrap" onSubmit={this.handleSubmit}>
                    <input maxLength={maxLength} className="CodeForm_Input" placeholder="ENTER CODE" type="text" value={value} onChange={this.handleChange} />
                </form>
            </div>
        );
    }
}

export default CodeForm;
