import React, {Component} from 'react';
import geolib from 'geolib';
import {Vector} from 'es6-geometry';
import Isvg from 'react-inlinesvg';

class Targeting extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedCode: '',
            codeState: 'neutral',
            location: null,
            orientation: null
        };
    }

    render() {
        const location = this.props.location;
        const orientation = this.props.orientation;

        if(!orientation || !location){
            console.log('orientation or location not provided');
            return;
        }

        const code = this.props.code;
        const locationVector = Vector.fromArray([location.coords.latitude, location.coords.longitude]);
        const targetVector = Vector.fromArray([code.lat, code.lon]);

        // const targetVector = Vector.fromArray([locationVector.x, locationVector.y + 100]);

        const compassHeading = orientation.alpha;
        const needleHeading = targetVector.subtract(locationVector).angleDeg();

        const needleRotation = {
            transform: "rotateZ(" + (needleHeading - 90 + compassHeading) + "deg)"
        };

        const compassRotation = {
            transform: "rotateZ(" + (compassHeading - 90) + "deg)"
        }

        var distance = geolib.getDistance(
            {latitude: code.lat, longitude: code.lon},
            {latitude: location.coords.latitude, longitude: location.coords.longitude}
        );

        var unit = 'm';

        if(distance >= 1000){
            unit = 'km';
            distance /= 1000;
        }

        return (
            <div className="Step Targeting">
                <div className="Compass">
                    <Isvg style={compassRotation} className="Compass_Ring" src="./assets/CompassRing.svg"></Isvg>
                    <Isvg style={needleRotation} className="Compass_Needle" src="./assets/CompassNeedle.svg"></Isvg>
                </div>
                {distance}{unit}
            </div>
        );
    }
}

export default Targeting;
