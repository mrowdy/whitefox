import React, {Component} from 'react';
import Isvg from 'react-inlinesvg';

class Spinner extends Component {

    render() {
        return (
            <div>
                Teleporting
                <div className="Spinner">
                    <Isvg className="Spinner_Row Spinner--mid" src="./assets/Spinner-Disk.svg"></Isvg>
                    <Isvg className="Spinner_Row Spinner--thick" src="./assets/Spinner-Disk.svg"></Isvg>
                    <Isvg className="Spinner_Row Spinner--thin" src="./assets/Spinner-Disk.svg"></Isvg>
                    <Isvg className="Spinner_Row Spinner--mid" src="./assets/Spinner-Disk.svg"></Isvg>
                    <Isvg className="Spinner_Row Spinner--thick" src="./assets/Spinner-Disk.svg"></Isvg>
                    <Isvg className="Spinner_Row Spinner--thin" src="./assets/Spinner-Disk.svg"></Isvg>
                    <Isvg className="Spinner_Row Spinner--mid" src="./assets/Spinner-Disk.svg"></Isvg>
                    <Isvg className="Spinner_Row Spinner--thick" src="./assets/Spinner-Disk.svg"></Isvg>
                    <Isvg className="Spinner_Row Spinner--thin" src="./assets/Spinner-Disk.svg"></Isvg>
                    <Isvg className="Spinner_Row Spinner--thin" src="./assets/Spinner-Disk.svg"></Isvg>
                    <Isvg className="Spinner_Row Spinner--thin" src="./assets/Spinner-Disk.svg"></Isvg>
                    <Isvg className="Spinner_Row Spinner--thin" src="./assets/Spinner-Disk.svg"></Isvg>
                    <Isvg className="Spinner_Row Spinner--thin" src="./assets/Spinner-Disk.svg"></Isvg>
                    <Isvg className="Spinner_Row Spinner--thin" src="./assets/Spinner-Disk.svg"></Isvg>
                    <Isvg className="Spinner_Row Spinner--thin" src="./assets/Spinner-Disk.svg"></Isvg>
                </div>
            </div>
        );
    }
}

export default Spinner;
