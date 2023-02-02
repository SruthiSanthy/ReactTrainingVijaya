import React from 'react'
class Users extends React.Component
 {
    constructor(props)
    {
        super(props)
        this.state={
            users : ["Sruthi","Madhavi","Jyothy"]
        }
    }
    render() { 
        return (<div><h2>Welcome to users class</h2>
        {
        
        this.state.users.map((user,i)=><ul key={i}><li>{user}</li>
        </ul>)
        }
        
        </div> )
        
    }
   
    
}
 
export default Users;