import React, {Component} from 'react';
import CodeListItem from './CodeListItem.js';

class CodeList extends Component {
    render() {
        return (
            <div className="CodeList">
               <ul>
                   {this.props.codes.map((code) =>
                       <li key={code.code}>
                           <CodeListItem code={code}/>
                       </li>
                   )}
               </ul>
            </div>
        );
    }
}

export default CodeList;
