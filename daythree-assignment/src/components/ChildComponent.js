import React from 'react'

const ChildComponent  = (props) =>
{
    
    return(
    <><button onClick={()=>props.increment()}>Increment Count {props.count} times</button></>
    )

}
export default ChildComponent
