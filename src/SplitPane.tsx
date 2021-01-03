import React from 'react'
import './Styles.css';

function SplitPane(props:any): JSX.Element{
    return(
        <div className="SplitPane">
<div className="SplitPane-left">
    {props.left}
</div>
<div className="SplitPane-right">
    {props.right}
</div>
        </div>
    )
}

export default SplitPane;