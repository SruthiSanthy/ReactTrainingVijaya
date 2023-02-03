import React from 'react'
import axios from 'axios';
class ClassLifeCycle extends React.Component {
    constructor(props) {
        super(props);
        this.state ={
            count :0,
            posts :[]
        }
        console.log("constructor called")
    }
    static getDerivedStateFromProps(props,state)
    {
        console.log("get derived state")
        return null;
    }
    componentDidMount()
    {
        console.log("Component did mount")
        axios.get("https://jsonplaceholder.typicode.com/posts")
        .then(response=>{this.setState({posts:response.data})})

    }
    componentDidUpdate()
    {
        console.log("Component did update")
    }

   render() { 
    console.log("render called")
        return (<>
        {
        this.state.posts.map((post,index)=><ul key={index}><li>{post.title}</li></ul>)}
        <button onClick={()=>this.setState({count:this.state.count+1})}>Click Me {this.state.count} times</button></>);
    }
}
 
export default ClassLifeCycle;