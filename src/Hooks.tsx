import React,{useState} from 'react'
function Hooks(){
    // Declare a new state variable, which we'll call "count"
    const[count,setCount]=useState(0);
    //useState returns a pair:the current state value and a function that lets you update it. 
    //You can call this function from an event handler or somewhere else.
   //  It’s similar to this.setState in a class
return(
    <div>
        <p>You are clicked {count}times</p>
   
        <button onClick={() => setCount(count + 1)}>Click me</button>
    </div>
);
}
export default Hooks;