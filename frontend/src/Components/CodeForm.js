import React, {Component} from 'react';

class CodeForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value: '',
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({value: event.target.value});
    }

    handleSubmit(event) {
        event.preventDefault();
        this.props.onChange(this.state.value);
        this.setState({value: ''});
    }

    render() {
        const value = this.state.value;

        return (
            <div className="CodeForm Step">
                <form className="CodeForm_Wrap" onSubmit={this.handleSubmit}>
                        <input className="CodeForm_Input" placeholder="ENTER CODE" type="text" value={value} onChange={this.handleChange} />
                    {/*<input type="submit" value="Submit" />*/}
                </form>
            </div>
        );
    }
}

export default CodeForm;
