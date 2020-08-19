import React from "react"

const Posts=({posts,loading})=>{
if(loading){
return <div>Loading....</div>
}
return (
    <div style={{padding:"20px"}}>
        {
         posts.map((post)=>{
             return <p style={{color:"green"}}>{post.title}</p>
         })   
        }
    </div>
)
}
export default Posts