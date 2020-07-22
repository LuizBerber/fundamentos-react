import React from 'react'

export default function WithParameter(props){
    const result = props.answer == 42 ? 'correct' : 'incorrect'
    return(
        <div>
            <p>
                <h2>Second Component!</h2>
                <strong>{props.question}</strong> is <strong>{props.answer}</strong> and it is <strong>{ result }</strong>
            </p>
        </div>
    )
}