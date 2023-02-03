import React,{useEffect, useState} from 'react'

import axios from 'axios'

function FunctionalUseEffect() {
    const[posts,setPosts] = useState([])
    useEffect(()=>{
        axios.get("https://jsonplaceholder.typicode.com/posts")
        .then(response=>{setPosts(response.data)})
       
    },[])
    return (<>
        {
        posts.map((post,index)=><ul key={index}><li>{post.title}</li></ul>)}
        </>)
    
}
export default FunctionalUseEffect
