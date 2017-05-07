import React, {Component} from 'react';

class CodeListItem extends Component {
    render() {
        return (
            <div className="CodeListItem">
                <div>Name: {this.props.code.code}</div>
                <div>Item: {this.props.code.item}</div>
                <div>Location: {this.props.code.location}</div>
            </div>
        );
    }
}

export default CodeListItem;
