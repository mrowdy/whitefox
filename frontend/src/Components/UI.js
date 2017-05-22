import React, {Component} from 'react';
import Isvg from 'react-inlinesvg';

class UI extends Component {

    render() {
        let codeState = 'UI--neutral';
        if(this.props.codeState === 'valid'){
            codeState = 'UI--valid';
        } else if(this.props.codeState === 'invalid'){
            codeState = 'UI--invalid';
        } else if(this.props.codeState === 'loading'){
            codeState = 'UI--loading';
        }

        let classNames = `UI ${codeState}`;
        return (
            <div className={classNames}>
                <Isvg className="UISvg UIFull" src="./assets/UI-Full.svg"></Isvg>
                <Isvg className="UISvg UIOutline"src="./assets/UI-Outline.svg"></Isvg>
                <Isvg className="UISvg UIOutline UIOutline--blur" src="./assets/UI-Outline.svg"></Isvg>
                <Isvg className="UISvg UIRuler" src="./assets/UI-Ruler.svg"></Isvg>
                <Isvg className="UISvg UICenter" src="./assets/UI-Center.svg"></Isvg>
                <Isvg className="UISvg UIDotTop" src="./assets/UI-DotTop.svg"></Isvg>
                <Isvg className="UISvg UIDotBottom" src="./assets/UI-DotBottom.svg"></Isvg>
                <Isvg className="UISvg UIInnerRing" src="./assets/UI-InnerRing.svg"></Isvg>
            </div>
        );
    }
}

export default UI;
