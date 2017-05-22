import React, {Component} from 'react';

class Targeting extends Component {
    render() {
        return (
            <div className="Step Access">
                Targeting  <br />
                {this.props.code.lat} <br />
                {this.props.code.lon}
            </div>
        );
    }
}

export default Targeting;
