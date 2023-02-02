import React from 'react'
class Employees extends React.Component
 {
    constructor(props)
    {
        super(props)
        this.state={
            employees : ["Yash","Infosys","Wipro"]
        }
    }
    render() { 
        return (<div><h2>Welcome to employee class</h2>
        {
        
        this.state.employees.map((employee,i)=><ul key={i}><li>{employee}</li>
        </ul>)
        }
        
        </div> )
        
    }
   
    
}
 
export default Employees;