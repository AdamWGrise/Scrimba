import React from 'react'

function Joke(props) {
    return(
        <div className="joke">
            <h5 style={{display: props.question ? "block" : "none"}}>{props.question}</h5>
            <hr style={{display: props.question && props.answer ? "block" : "none"}} />
            <h5 style={{display: !props.answer && "none"}}>{props.answer}</h5>
        </div>
    )
}

export default Joke