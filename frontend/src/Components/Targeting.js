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

        this.compassHeading = this.compassHeading.bind(this);

    }

    compassHeading(alpha, beta, gamma) {

        // Convert degrees to radians
        var alphaRad = alpha * (Math.PI / 180);
        var betaRad = beta * (Math.PI / 180);
        var gammaRad = gamma * (Math.PI / 180);

        // Calculate equation components
        var cA = Math.cos(alphaRad);
        var sA = Math.sin(alphaRad);
        var cB = Math.cos(betaRad);
        var sB = Math.sin(betaRad);
        var cG = Math.cos(gammaRad);
        var sG = Math.sin(gammaRad);

        // Calculate A, B, C rotation components
        var rA = -cA * sG - sA * sB * cG;
        var rB = -sA * sG + cA * sB * cG;
        var rC = -cB * cG;

        // Calculate compass heading
        var compassHeading = Math.atan(rA / rB);

        // Convert from half unit circle to whole unit circle
        if (rB < 0) {
            compassHeading += Math.PI;
        } else if (rA < 0) {
            compassHeading += 2 * Math.PI;
        }

        // Convert radians to degrees
        compassHeading *= 180 / Math.PI;

        return compassHeading;

    }

    render() {
        const location = this.props.location;
        const orientation = this.props.orientation;
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
