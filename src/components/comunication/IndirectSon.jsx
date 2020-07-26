import React from 'react'

export default props => {

    const wc = props.whenClick

    return (
        <div>
            <div><strong>Son</strong></div>
            <button onClick={e => wc('John', 26, true)}>Provide Information</button>
        </div>
    )
}