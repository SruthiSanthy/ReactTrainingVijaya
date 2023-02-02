import React from 'react'
import Animals from './Animals'
import Birds from './Birds'
import Employees from './Employees'
import Users from './Users'
class LivingThings extends React.Component {
    constructor(props) {
        super(props);
        this.state = 
        {
            isAnimalVisible : false,
            isBirdVisible : false,
            isEmployeeVisible : false,
            isUserVisible : false
        }
    }
    render() { 
        return ( <><button onClick={()=>this.setState({isAnimalVisible:true})}>Show animals</button>
        <button onClick={()=>this.setState({isAnimalVisible:false})}>Hide animals</button>
        <br/>
        <button onClick={()=>this.setState({isEmployeeVisible:true})}>Show Employees</button>
        <button onClick={()=>this.setState({isEmployeeVisible:false})}>Hide Employees</button>
        <br/>
        <button onClick={()=>this.setState({isBirdVisible:true})}>Show Birds</button>
        <button onClick={()=>this.setState({isBirdVisible:false})}>Hide Birds</button>
        <br/>
        <button onClick={()=>this.setState({isUserVisible:true})}>Show Users</button>
        <button onClick={()=>this.setState({isUserVisible:false})}>Hide Users</button>
        {this.state.isAnimalVisible && <Animals/>}
        {this.state.isBirdVisible && <Birds/>}
        {this.state.isEmployeeVisible && <Employees/>}
        {this.state.isUserVisible && <Users/>}
        </> );
    }
}
 
export default LivingThings;