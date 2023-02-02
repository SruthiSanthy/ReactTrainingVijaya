import React from 'react'
class Birds extends React.Component
 {
    constructor(props)
    {
        super(props)
        this.state={
            birds : ["Crow","Peacock","Pigeon"]
        }
    }
    render() { 
        return (<div><h2>Welcome to birds class</h2>
        {
        
        this.state.birds.map((bird,i)=><ul key={i}><li>{bird}</li>
        </ul>)
        }
        
        </div> )
        
    }
   
    
}
 
export default Birds;