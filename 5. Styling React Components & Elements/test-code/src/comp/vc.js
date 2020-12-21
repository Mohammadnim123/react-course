import React from "react"

const Vc = (props)=>{
    let x;
    if(props.len > 20){
        x = (<p>"too long"</p>)
    }
    else{
        x = (<p>"short text"</p>)
    }

    return(
        
            x
        
    )
}

export default Vc;