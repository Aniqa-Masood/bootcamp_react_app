import React from 'react'

function Dinner (props){
    return(
        <div>
            <h1>We are serving Bread</h1>
            <h1>We are serving {props.sweetdish} </h1>
            <h1>We are serving {props.dishname} </h1>
        </div>
        // It cannot return 2 components ,It can just return only 1 component, In order to write 2 components ,put it under 1 tag..
    )
}
export default Dinner;