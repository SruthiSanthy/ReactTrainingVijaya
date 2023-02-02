import React from 'react'
class Animals extends React.Component
 {
    constructor(props)
    {
        super(props)
        this.state={
            animals : ["Cat","Dog","Ant"]
        }
    }
    render() { 
        return (<div><h2>Welcome to animals class</h2>
        {
        
        this.state.animals.map((animal,i)=><ul key={i}><li>{animal}</li>
        </ul>)
        }
        
        </div> )
        
    }
   
    
}
 
export default Animals;