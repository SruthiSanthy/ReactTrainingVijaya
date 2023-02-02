import React from 'react'
import ChildComponent from './ChildComponent';
class ParentComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            count : 0
        }
        
    }
    incrementCount=()=>
    {
        this.setState ({count : this.state.count+1})
    }
    render() { 
        return ( <><h1>I am the parent component</h1><ChildComponent  increment={this.incrementCount} count={this.state.count}/></> );
    }
}
 
export default ParentComponent;