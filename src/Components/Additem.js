import React from "react";
import { useState } from "react";

const Additem=(props)=>{
    const [inputtext,setInputtext]=useState("")
    
    return (
        <>
        <input type="text" placeholder="Enter todo" value={inputtext}
        onChange={(e)=>{
            setInputtext(e.target.value)
        }}/>
        <button onClick={()=>{
            props.newlist(inputtext);
            setInputtext("")
        }}>Add</button>
        </>
    );
}
export default Additem;