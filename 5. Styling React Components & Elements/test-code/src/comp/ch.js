import React from 'react'

 const Ch = (props) => {
    return (
        <div onClick={props.delete}>
            {props.idx}----{props.char}
        </div>
    )
}

export default Ch;