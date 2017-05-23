import React, {Component} from 'react';

class Targeting extends Component {

    render() {

        const location = this.props.location;
        const orientation = this.props.orientation;
        const code = this.props.code;
        return (
            <div className="Step Access">
                Targeting <br />
                {code.lat} <br />
                {code.lon} <br />
                Orientation <br />
                {orientation}
                Position <br />
                {location.coords.latitude}
                {location.coords.longitude}
            </div>
        );
    }
}

export default Targeting;
