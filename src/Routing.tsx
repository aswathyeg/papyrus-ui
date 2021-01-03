import React from 'react';
import {BrowserRouter as Router,
Link,
Switch,
Route
} from 'react-router-dom';
export default function Routing(){

    return(
        <Router>
<div>
    <ul>
        <li>
            <Link to="/">Home</Link>
            
        </li>
        <li>

            <Link to="/about">About</Link>
        </li>
        <li>

            <Link to="/dashboard">Dashboard</Link>
            
        </li>
    </ul>
</div>


        </Router>
    )

}