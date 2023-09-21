import React, { useState } from "react";
import Tree from "./components/Tree";


function App() {
    const[show, setshow] = useState(false)
    const[place, setPlace] = useState("")
    let  data=[
        {
            id:1,
            name:"Student 1",
            access: 101, 
            hidden: false,

            mySem : ['sem1','sem2','sem3']
        },
        {
            id:2,
            name:"Student 2",
            access: 101, 
            hidden: false,
            mySem : ['sem1','sem2','sem3']
        },
        {
            id:3,
            name:"Student 3",
            access: 101, 
            hidden: false,
            mySem : ['sem1','sem2','sem3']{
        },
    ]
    return ( 
    <div>
        <button onClick={()=>setshow(true)}>Tree</button>
        {show &&
           data.map((data)=>{
                return  (<>
                <div onClick={()=>setPlace(data.id)}>{data.name}</div>
                {place === data.id && data.mySem.map((data) => {return<div>{data}</div>})}
                </> )
})
         
        }
     </div>);
    
    
}
export default App;